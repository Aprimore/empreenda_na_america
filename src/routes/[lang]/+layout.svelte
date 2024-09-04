<script>
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { EBOOK_REMOTEWORK_webp } from '$lib';
	import Footer from '$lib/components/Footer.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	// import {
	// 	OG_IMAGE_HEIGHT,
	// 	OG_IMAGE_WIDTH,
	// 	SITE_DESCRIPTION,
	// 	SITE_TITLE,
	// 	SITE_URL
	// } from '$lib/siteConfig';
	import { currentLocale } from '$lib/store.js';
	import { loadTranslations, locale } from '$lib/translations';
	import '../../app.css';

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;

	export let data;

	// console.log('consoleLogPagePath', SITE_URL + data.route);

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

	let SITE_TITLE;
	let SITE_DESCRIPTION;
	let SITE_URL;
	let OG_IMAGE_WIDTH;
	let OG_IMAGE_HEIGHT;

	// Load SEO-related variables dynamically
	async function loadSeoData() {
		const seoData = await import('$lib/siteConfig');
		SITE_TITLE = seoData.SITE_TITLE;
		SITE_DESCRIPTION = seoData.SITE_DESCRIPTION;
		SITE_URL = seoData.SITE_URL;
		OG_IMAGE_WIDTH = seoData.OG_IMAGE_WIDTH;
		OG_IMAGE_HEIGHT = seoData.OG_IMAGE_HEIGHT;
	}

	// Load the SEO data when the component is initialized
	if (browser) {
		loadSeoData();
	}
</script>

<svelte:head>
	<!-- Ensure that SEO data is loaded before using it -->
	{#await loadSeoData()}
		<title>Empreenda na América</title>
	{:then}
		<title>Empreenda na América</title>
		<link rel="canonical" href={SITE_URL + data.route} />
		<meta property="og:url" content={SITE_URL} />
		<meta property="og:type" content="article" />
		<meta property="og:title" content={SITE_TITLE} />
		<meta name="description" content={SITE_DESCRIPTION} />
		<meta property="og:description" content={SITE_DESCRIPTION} />
		<meta property="og:image" content={EBOOK_REMOTEWORK_webp} />
		<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
		<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
		<meta name="twitter:image" content={EBOOK_REMOTEWORK_webp} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={SITE_TITLE} />
		<meta name="twitter:description" content={SITE_DESCRIPTION} />
	{:catch error}
		<!-- Handle errors if needed -->
		<title>Empreenda na América</title>
	{/await}
</svelte:head>

<!-- <Navbar {data} /> -->
<Navbar2 />
<main>
	<slot />
</main>
<Footer />
