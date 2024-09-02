<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { currentLocale } from '$lib/store.js';
	import { loadTranslations, locale } from '$lib/translations';
	import '../../app.css';

	// let pagePath = $page.url.pathname;
	// $: pagePath = $page.url.pathname;

	// export const load = async ({ url }) => {
	// 	const { pathname } = url;

	// 	let defaultLocale = 'en';
	// 	if (browser && currentLocale.get()) {
	// 		defaultLocale = currentLocale.get();
	// 	}

	// 	const initLocale = locale.get() || defaultLocale;
	// 	await loadTranslations(initLocale, pathname);
	// 	return {};
	// };
</script>

<!-- <Navbar /> -->
<slot />
