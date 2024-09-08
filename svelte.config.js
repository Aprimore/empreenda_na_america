// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const languages = ['en', 'pt-br', 'es'];
const pages = [
	'/'
	// '/template2',
	// '/template3',
	// '/template4',
	// '/template5'
	// '/inter',
	// '/lora',
	// '/manrope',
	// '/merriweather',
	// '/montserrat',
	// '/poppins'
	// Add more static pages as needed
];

// Function to generate prerender entries
function generatePrerenderEntries() {
	const entries = [];

	// Static routes
	entries.push('/');

	// Add routes for each language
	languages.forEach((lang) => {
		entries.push(`/${lang}`);
		pages.forEach((page) => {
			entries.push(`/${lang}${page}`);
		});
	});
	console.log(entries);
	return entries;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.

		// adapter: adapter()
		// prerender: {
		// 	handleMissingId: 'warn' // or 'ignore' to completely suppress the error
		// },
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			// pages: 'build',
			// assets: 'build',
			// fallback: 'index.html',
			// precompress: false,
			// strict: true
		}),
		prerender: {
			crawl: true,
			entries: generatePrerenderEntries()
			// entries: ['/pt-br/', '/en/', '/es/']
		},
		paths: {
			base: '', // Set this to '' if your site is at the root of the domain
			// assets: '' // Set this if your assets are served from a different URL
		}
	},
	preprocess: vitePreprocess()
};

export default config;
