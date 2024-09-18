<script lang="ts">
	// import CookieConsent from '$lib/components/CookieConsent.svelte';
	// import ViewTransition from '$lib/components/navigation.svelte';
	import '@fontsource-variable/lora';
	import '@fontsource-variable/inter';
	import { EBOOK_REMOTEWORK_webp, toptier_webp } from '$lib';
	import Footer from '$lib/components/Footer.svelte';
	import '../../app.postcss';
	import {
		OG_IMAGE_HEIGHT,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
	import { page } from '$app/stores';
	import { getPageTitle } from '$lib/functions/pageTitle';
	import { browser } from '$app/environment';
	import { loadGA, loadGTM } from '$lib/loadGTM';
	// export let data;
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt');

	// let dataLang = data.lang;

	const baseURL = 'https://www.empreendanaamerica.com';
	const hreflangs = [
		{ lang: 'es', url: `${baseURL}/` },
		{ lang: 'pt', url: `${baseURL}/pt/` }
	];
	import { onMount } from 'svelte';
	
	onMount(async () => {
		if (browser) {
			Promise.all([loadGTM(), loadGA()]);
		}
	});
</script>

<svelte:head>
	<title>{getPageTitle(pagePath)}</title>
	{#each hreflangs as { lang, url }}
		<link rel="alternate" hreflang={lang} href={url} />
	{/each}
</svelte:head>

<!-- <ViewTransition /> -->
<!-- <CookieConsent /> -->
<slot />
<Footer />
