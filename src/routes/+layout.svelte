<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import { currentLocale } from '$lib/store.js';
	import { loadTranslations, locale } from '$lib/translations';
	import '../app.css';
	import LanguageSwitcher from './../lib/components/LanguageSwitcher.svelte';
	
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	
	export const load = async ({ url }) => {
		const { pathname } = url;

		let defaultLocale = 'en';
		if (browser && currentLocale.get()) {
			defaultLocale = currentLocale.get();
		}

		const initLocale = locale.get() || defaultLocale;
		await loadTranslations(initLocale, pathname);
		return {};
	};
</script>

<Navbar />
<slot />

<style>
	/* Zoom responsiveness */
	/* @media only screen and (min-width: 600px) {
		:global(html) {
			zoom: 0.8;
		}
	}

	@media only screen and (min-width: 1000x) {
		:global(html) {
			zoom: 0.9;
		}
	}

	@media only screen and (min-width: 1400px) {
		:global(html) {
			zoom: 1;
		}
	} */

	:global(html) {
		/* font-family: 'Exo Variable, sans-serif;'; */
	}

	/* Specific font classes */
	:global(.Archivo) {
		/* font-family: 'Archivo Variable', sans-serif; */
	}

	:global(.Exo) {
		/* font-family: 'Exo Variable', sans-serif; */
	}

	:global(.Exo-Regular) {
		/* font-family: 'Exo Variable', sans-serif; */
		font-weight: 400; /* Set font weight */
	}

	:global(.Exo-Semibold) {
		/* font-family: 'Exo Variable', sans-serif; */
		font-weight: 600; /* Set font weight */
	}

	:global(.Exo-Bold) {
		/* font-family: 'Exo Variable', sans-serif; */
		font-weight: 700; /* Set font weight */
	}
</style>
