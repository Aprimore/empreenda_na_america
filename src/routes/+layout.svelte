<script>
	// import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { EBOOK_REMOTEWORK_webp } from '$lib';
	// import Navbar from '$lib/components/Navbar.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import {
		OG_IMAGE_HEIGHT,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
	import '../app.css';

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;

	export async function load({ url }) {
		const lang = url.pathname.split('/')[1] || 'en'; // Extract language from URL path
		return {
			props: {
				lang
			}
		};
	}
	export let lang;
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

<!-- <Navbar /> -->
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
