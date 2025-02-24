import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { sitemapWrapAdapter } from 'sveltekit-static-sitemap';
import lang from './src/lib/translations/lang.js';

const supportedLocales = Object.keys(lang);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined, // Keep this only if using SPA-like behavior
			precompress: false,
			strict: false
		}),
		prerender: {
			crawl: true,
			entries: ['*'],
			origin: 'https://www.empreendanaamerica.com',
			// entries: generatePrerenderEntries()
			handleMissingId: 'warn' // or 'ignore' to completely suppress the error
			// entries: ['/pt-br/', '/en/', '/es/']
		},

		// prerender: {
		// 	entries: ['*'],
		// 	// entries: supportedLocales.flatMap((locale) => [
		// 	// 	`/${locale}`,
		// 	// 	`/${locale}/v1/blog` // Main blog page
		// 	// ])
		// 	origin: 'https://www.empreendanaamerica.com',
		// 	handleMissingId: 'warn' // Prevent build failure due to missing dynamic pages
		// },

		version: {
			name: Date.now().toString()
		}
	},

	onwarn: (warning, handler) => {
		// Ignore accessibility warnings for UI flexibility
		if (
			[
				'a11y-invalid-attribute',
				'a11y-click-events-have-key-events',
				'a11y-no-static-element-interactions'
			].includes(warning.code)
		) {
			return;
		}
		handler(warning);
	}
};

export default config;
