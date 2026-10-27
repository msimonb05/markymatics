---
title: 'markymatics: Personal Portfolio'
short: markymatics
tagline: 'This website: a personal portfolio built with Astro and Tailwind CSS, with project screenshots, certifications and a working contact form.'
role: Yours truly, the Developer
period: Oct 2026 – Present
sort: 202611 # ongoing, so it leads Built
group: built
built: A static Astro site styled with Tailwind CSS, with an animated canvas background, screenshot carousels, certificate popups and a contact form that sends email through a Cloudflare Pages Function and Resend, deployed on Cloudflare Pages.
stack: [Astro, Tailwind CSS, JavaScript, Bun, Cloudflare Pages, Resend]
github: https://github.com/msimonb05/markymatics
live: https://markymatics.pages.dev/
preview: [04-project-page, 06-certifications, 08-resume]
screenshots:
  01-hero: "The opening screen, where the question decodes from random characters."
  02-intro: "Introduction: name, role, a short statement and social links."
  03-projects: "Projects: what I led and built on each team, with screenshot previews."
  04-project-page: "A project page: a captioned screenshot carousel under the role, dates and tech stack."
  05-skills: "Skills grouped by area, with logos and the projects each group was used in."
  06-certifications: "Certifications: each badge opens the certificate with its description."
  07-contact: "Contact: a form that emails me directly, with links to my profiles."
  08-resume: "Résumé: download or open the PDF, with a preview beside the highlights."
  09-mobile: "On phones: the opening screen, the section menu and a project page."
---

## The project

This portfolio is the site you are reading. I designed and built it from scratch in Astro, with a dark theme drawn from a seven-color palette and balanced with the 60-30-10 rule.

## What I did

- The background is a canvas grid of aqua squares. Streaks of light fall down the columns in stepped motion and speed up while the page scrolls, and squares near the cursor light up as it moves.
- The opening question decodes from random characters, and swapping my name for my nickname triggers a glitch effect in the palette's colors. Sections fade in as they scroll into view, and every animation turns off for visitors who prefer reduced motion.
- Each project is a Markdown file in an Astro content collection with a validated schema. Project pages show a captioned screenshot carousel, and the home page shows a strip of previews. I captured the screenshots with Playwright, from the live sites or from local copies running on test data.
- Certifications appear as badges that open the full certificate, its description and its skills in a native dialog.
- The contact form posts to a Cloudflare Pages Function that sends the message through Resend. It validates every field on the server, keeps the API key in an encrypted secret, and stops spam with a honeypot field, a minimum fill time and Cloudflare Turnstile.
- A fixed header links to each section, with a menu on phones, and the layout adapts from 320-pixel phones to wide desktop screens.

The site is built as static pages with one serverless function, served from Cloudflare Pages, with Bun as the package manager.
