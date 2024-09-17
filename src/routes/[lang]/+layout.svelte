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
	// import { getPageTitle } from '$lib/functions/pageTitle';
	export let data;
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;

	let dataLang = data.lang;
</script>

<svelte:head>
	<!-- <link rel="alternate" hreflang="pt-BR" href="https://empreendanaamerica.com/pt/" /> -->
	<!-- <link rel="alternate" hreflang="es" href="https://empreendanaamerica.com/es/" /> -->
	<link rel="canonical" href="https://empreendanaamerica.com/{dataLang}/" />
</svelte:head>

<!-- <svelte:head>
	<title>{getPageTitle(pagePath)}</title>
	<link rel="canonical" href={SITE_URL + pagePath} />
</svelte:head> -->

<!-- <ViewTransition /> -->
<!-- <CookieConsent /> -->
<slot />
<Footer />

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
</style>
