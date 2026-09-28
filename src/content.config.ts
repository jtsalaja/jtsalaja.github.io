import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		stack: z.array(z.string()),
		repoUrl: z.string().url().optional(),
		demoUrl: z.string().url().optional(),
		featured: z.boolean().default(false),
		order: z.number().optional(),
	}),
});

export const collections = { projects };
