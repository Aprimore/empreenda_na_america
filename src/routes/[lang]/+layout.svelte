<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { EBOOK_REMOTEWORK_webp } from '$lib';
	import Footer from '$lib/components/Footer.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	import {
		OG_IMAGE_HEIGHT,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
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
</script>

<svelte:head>
	<!-- <title>{$page.data.post?.title || 'My Menthor | Home'}</title> -->
	<title>Empreenda na America</title>
	<!-- <title>{getPageTitle(pagePath)}</title> -->
	<link rel="canonical" href={SITE_URL + pagePath} />
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
</svelte:head>

<!-- <Navbar {data} /> -->
<Navbar2 />
<main>
	<slot />
</main>
<Footer />
