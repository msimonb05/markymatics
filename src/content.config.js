import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		short: z.string(),
		tagline: z.string(),
		role: z.string(),
		team: z.string().optional(),
		period: z.string(),
		sort: z.number(),
		group: z.enum(['led', 'built']),
		led: z.string().optional(),
		built: z.string(),
		outcome: z.string().optional(),
		stack: z.array(z.string()),
		github: z.url().optional(),
		live: z.url().optional(),
		// Overrides the default "Live site" label, e.g. "Get the app"
		liveLabel: z.string().optional(),
		// Carousel captions keyed by screenshot file name, e.g. 01-dashboard
		screenshots: z.record(z.string(), z.string()).optional(),
		// Which screenshots the home page preview strip shows, by file name; defaults to the first ones
		preview: z.array(z.string()).optional(),
	}),
});

export const collections = { projects };
