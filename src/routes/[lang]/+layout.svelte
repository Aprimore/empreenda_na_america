<script lang="ts">
	import '@fontsource-variable/lora';
	import '@fontsource-variable/inter';
	import interWoff2 from '@fontsource-variable/inter/files/inter-latin-700-normal.woff2?url';
	import loraWoff2 from '@fontsource-variable/lora/files/lora-latin-400-normal.woff2?url';
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
	<link rel="preload" as="font" type="font/woff2" href={interWoff2} crossorigin="anonymous" />
	<link rel="preload" as="font" type="font/woff2" href={loraWoff2} crossorigin="anonymous" />

	<!-- <title>{$page.data.post?.title || 'My Menthor | Home'}</title> -->
	<!-- {#if pagePath && pagePath !== '/'}
	{/if} -->
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

<slot />
<Footer />

<!-- <nav class="max-w-2xl mx-auto border border-blue-950 rounded p-2 m-2">
	<div class="flex items-center justify-between text-blue-gray-900">
		<a
			href="/en/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE1
		</a>
		<a
			href="/en/template2/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE2
		</a>
		<a
			href="/en/template3/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE3
		</a>
		<a
			href="/en/template4/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE4
		</a>
		<a
			href="/en/template5/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE5
		</a>
	</div>
</nav> -->
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
		font-family: 'Lora Variable', serif;
		font-weight: 400;
		font-optical-sizing: auto;
		font-style: normal;
		font-display: swap;
	}
	:global(.Lora-Bold) {
		font-family: 'Lora Variable', serif;
		font-weight: 700;
		font-optical-sizing: auto;
		font-style: normal;
		font-display: swap;
	}
	:global(.Inter) {
		font-family: 'Inter Variable', sans-serif;
		font-weight: 400;
		font-optical-sizing: auto;
		font-style: normal;
		font-display: swap;
	}

	:global(.Inter-Bold) {
		font-family: 'Inter Variable', sans-serif;
		font-weight: 700;
		font-optical-sizing: auto;
		font-style: normal;
		font-display: swap;
	}
</style>
