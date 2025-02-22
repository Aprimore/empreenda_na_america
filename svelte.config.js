// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sitemapWrapAdapter } from 'sveltekit-static-sitemap';
import lang from './src/lib/translations/lang.js';

const supportedLocales = Object.keys(lang);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	// onwarn: (warning, handler) => {
	// 	if (warning.filename.includes('@lottiefiles/svelte-lottie-player')) {
	// 		return;
	// 	}

	// 	if (warning.code === 'a11y-click-events-have-key-events') return;
	// 	if (warning.code === 'a11y-no-static-element-interactions') return;
	// 	handler(warning);
	// },

	//123 test

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// fallback: null,
			fallback: '404.html', // this is critical for handling dynamic routes
			precompress: false
			// strict: false
		}),
		// prerender: {
		// entries: ['*']
		// origin: 'https://empreendanaamerica.com/'
		// },
		prerender: {
			crawl: true,
			entries: supportedLocales.reduce(
				(acc, locale) => [
					...acc,
					`/${locale}`,
					`/${locale}/401`,
					`/${locale}/403`,
					`/${locale}/404`,
					`/${locale}/500`,
					`/${locale}/about`,
					`/${locale}/about2`,
					`/${locale}/test1`,
					`/${locale}/test2`,
					`/${locale}/v1/blog`,
					`/${locale}/v1/blog/*`
				],
				['*']
			),
			origin: 'https://www.empreendanaamerica.com'
			// entries: generatePrerenderEntries()
			// handleMissingId: 'warn' // or 'ignore' to completely suppress the error
			// entries: ['/pt-br/', '/en/', '/es/']
		},
		adapter: sitemapWrapAdapter(adapter())
		// csp: {
		// 	mode: 'hash',
		//   }
		// }

		// paths: {
		// base: '' // Set this to '' if your site is at the root of the domain
		// assets: '' // Set this if your assets are served from a different URL
		// }
	},
	onwarn: (warning, handler) => {
		// Disable the specific A11y warning
		if (warning.code === 'a11y-invalid-attribute') return;
		// Handle all other warnings normally
		handler(warning);
	}
};

export default config;

// const languages = ['en', 'pt-br', 'es'];
// const pages = ['/'];

// Function to generate prerender entries
// function generatePrerenderEntries() {
// 	const entries = [];

// 	// Static routes
// 	entries.push('/');

// 	// Add routes for each language
// 	languages.forEach((lang) => {
// 		entries.push(`/${lang}`);
// 		pages.forEach((page) => {
// 			entries.push(`/${lang}${page}`);
// 		});
// 	});
// 	return entries;
// }
