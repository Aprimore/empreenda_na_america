<script lang="ts">
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import '@fontsource-variable/lora';
	import '@fontsource-variable/inter';
	import { EBOOK_REMOTEWORK_webp, toptier_webp } from '$lib';
	import Footer from '$lib/components/Footer.svelte';
	import '../../app.css';
	import {
		OG_IMAGE_HEIGHT,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
	import { page } from '$app/stores';
	import { getPageTitle } from '$lib/functions/pageTitle';

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
</script>

<svelte:head>
	<!-- Preconnect to Google's font servers -->
	<!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> -->

	<!-- Preload the fonts for Inter 700 and Lora 400 -->
	<!-- <link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Lora:wght@400&display=swap"
		rel="stylesheet"
	/> -->

	<title>{getPageTitle(pagePath)}</title>
	<link rel="canonical" href={SITE_URL + pagePath} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={toptier_webp} />
	<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
	<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
	<meta name="twitter:image" content={toptier_webp} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
</svelte:head>

<CookieConsent />
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

	:global(html) {
		font-family: 'Inter Variable';
		font-weight: 700;
		font-optical-sizing: auto;
		font-style: normal;
		font-display: swap;
	}
	:global(.Lora) {
		font-family: 'Lora Variable', serif, Arial;
		font-weight: 400;
		font-optical-sizing: auto;
		font-style: normal;
		font-display: swap;
	}
	:global(.Lora-Bold) {
		font-family: 'Lora Variable', serif, Arial;
		font-weight: 700;
		font-optical-sizing: auto;
		font-style: normal;
		font-display: swap;
	}
	:global(.Inter) {
		font-family: 'Inter Variable', sans-serif, Arial;
		font-weight: 400;
		font-optical-sizing: auto;
		font-style: normal;
		font-display: swap;
	}

	:global(.Inter-Bold) {
		font-family: 'Inter Variable', sans-serif, Arial;
		font-weight: 700;
		font-optical-sizing: auto;
		font-style: normal;
		font-display: swap;
	}
</style>
