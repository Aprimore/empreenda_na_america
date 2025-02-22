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
	import { loadGA, loadGTM, sendFacebookPixelEvent } from '$lib/loadGTM';
	// export let data;
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt');

	// let dataLang = data.lang;

	const baseURL = 'https://www.empreendanaamerica.com';
	// const hreflangs = [
	// 	{ lang: 'es', url: `${baseURL}/es` },
	// 	{ lang: 'pt', url: `${baseURL}/pt/` }
	// ];
	import { onMount } from 'svelte';
	import CookieConsentComponent from '$lib/components/CookieConsentComponent.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	// import { loadFacebookConversion } from '$lib/loadFacebookPixel';

	onMount(async () => {
		if (browser) {
			await sendFacebookPixelEvent();
			// Promise.all([loadGTM(), loadGA()]);
		}
	});
</script>

<svelte:head>
	<!-- <title>{getPageTitle(pagePath)}</title>
	{#each hreflangs as { lang, url }}
		<link rel="alternate" hreflang={lang} href={url} />
	{/each} -->

	<noscript>
		<iframe
			title="gtm"
			src="https://www.googletagmanager.com/ns.html?id=GTM-MNVT3N22"
			height="0"
			width="0"
			style="display:none;visibility:hidden"
		></iframe>
	</noscript>
</svelte:head>

<!-- <ViewTransition /> -->
<Navbar2 />
<slot />
<Footer />
<CookieConsentComponent />
