// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sitemapWrapAdapter } from 'sveltekit-static-sitemap';
import lang from './src/lib/translations/lang.js';

const supportedLocales = Object.keys(lang);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			// pages: 'build',
			// assets: 'build',
			// fallback: 'index.html'
			// precompress: false,
			// strict: true
		}),
		prerender: {
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
					`/${locale}/test2`
				],
				['*']
			),
			origin: 'https://www.empreendanaamerica.com',
			// crawl: false
			// entries: generatePrerenderEntries()
			// 	handleMissingId: 'warn' // or 'ignore' to completely suppress the error
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
	preprocess: vitePreprocess()
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
