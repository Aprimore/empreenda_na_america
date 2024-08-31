<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	// import {
	// 	OG_IMAGE_HEIGHT,
	// 	OG_IMAGE_WIDTH,
	// 	SITE_DESCRIPTION,
	// 	SITE_TITLE,
	// 	SITE_URL
	// } from '$lib/siteConfig';
	// import og_image from '../lib/assets/images/og_image.webp';
	import '../app.css';
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
</script>

<!-- <svelte:head>
	<title>{getPageTitle(pagePath)}</title>
	<link rel="canonical" href={SITE_URL + pagePath} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={og_image} />
	<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
	<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
	<meta name="twitter:image" content={og_image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
</svelte:head> -->

<!-- <ViewTransition /> -->
<!-- <ParaglideJS {i18n}> -->
<main>
	<Navbar />
	<slot />
</main>

<!-- <Footer /> -->
<!-- </ParaglideJS> -->

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
