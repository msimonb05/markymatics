// Cloudflare Pages Function: POST /api/contact. Runs on Cloudflare, never in the browser.
// Secrets (Pages → Settings → Variables and Secrets; locally in .dev.vars):
// RESEND_API_KEY, TURNSTILE_SECRET_KEY, CONTACT_TO_EMAIL
import { Resend } from 'resend';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 254, message: 5000 };

const reply = (status, body) => Response.json(body, { status });
const clean = (value) => (typeof value === 'string' ? value.trim() : '');

export async function onRequestPost({ request, env }) {
	// Only accept posts from this site's own pages
	const origin = request.headers.get('Origin');
	if (origin && origin !== new URL(request.url).origin) return reply(403, { error: 'Not allowed.' });

	if (!env.RESEND_API_KEY || !env.TURNSTILE_SECRET_KEY || !env.CONTACT_TO_EMAIL) {
		return reply(500, { error: 'The contact form is not set up yet. Please reach me on LinkedIn.' });
	}

	let form;
	try {
		form = await request.formData();
	} catch {
		return reply(400, { error: 'Something was wrong with the form. Please try again.' });
	}

	// Bots fill in the hidden "company" field; people never see it
	if (clean(form.get('company'))) return reply(200, { ok: true });

	const name = clean(form.get('name')).replace(/[\r\n]+/g, ' ');
	const email = clean(form.get('email'));
	const message = clean(form.get('message'));
	if (!name || name.length > LIMITS.name) return reply(400, { error: 'Please enter your name (up to 100 characters).' });
	if (!EMAIL.test(email) || email.length > LIMITS.email) return reply(400, { error: 'Please enter a valid email address.' });
	if (!message || message.length > LIMITS.message) return reply(400, { error: 'Please enter a message (up to 5,000 characters).' });

	const check = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		body: new URLSearchParams({
			secret: env.TURNSTILE_SECRET_KEY,
			response: clean(form.get('cf-turnstile-response')),
			remoteip: request.headers.get('CF-Connecting-IP') ?? '',
		}),
	}).then((r) => r.json(), () => ({ success: false }));
	if (!check.success) return reply(403, { error: 'Please complete the verification and try again.' });

	// Plain text only, so nothing a visitor types can be rendered as HTML
	const { error } = await new Resend(env.RESEND_API_KEY).emails.send({
		from: 'markymatics portfolio <onboarding@resend.dev>',
		to: env.CONTACT_TO_EMAIL,
		replyTo: email,
		subject: `Portfolio message from ${name}`,
		text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
	});
	if (error) return reply(502, { error: "Your message couldn't be sent right now. Please try again later." });

	return reply(200, { ok: true });
}
