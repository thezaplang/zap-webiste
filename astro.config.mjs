// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ZAP',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/thezaplang/zap' }],
			sidebar: [
				{
					label: "Getting started",
					slug: "getting-started"
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installing from source', slug: 'guides/install_src' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		react(),
	],
});
