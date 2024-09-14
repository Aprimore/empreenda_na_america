<script lang="ts">
	import { page } from '$app/stores';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import Section1 from '$lib/components/Home/Section1.svelte';
	import Section2 from '$lib/components/Home/Section2.svelte';
	import Section3 from '$lib/components/Home/Section3.svelte';
	import Section4 from '$lib/components/Home/Section4.svelte';
	import Section6 from '$lib/components/Home/Section6.svelte';
	import Section7 from '$lib/components/Home/Section7.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';
	import { onMount } from 'svelte';
	import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/home/home.jpg';
	import og_image from '$lib/assets/images/og_image.webp';
	import website from '$lib/config/website';
	import SEO from '$lib/components/SEO/index.svelte';
	// let loading = true;
	import { t } from '$lib/translations';
	// onMount(() => {
	// 	loading = false;
	// });

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;

	const isPortuguese = pagePath.startsWith('/pt/');
	console.log(isPortuguese);

	const { author, siteUrl } = website;
	let title = isPortuguese ? 'Início' : 'Home';
	const breadcrumbs = [
		{
			name: isPortuguese ? 'Início' : 'Home',
			slug: ''
		}
	];

	let metadescription = isPortuguese
		? 'My Menthor é uma plataforma SaaS de Arquitetura Empresarial que aprimora a visibilidade dos processos, integrando estratégia, pessoas e tecnologia para melhorar o desempenho e a maturidade organizacional'
		: 'My Menthor is a Business Architecture SaaS platform that enhances process visibility by integrating strategy, people, and technology to improve organizational performance and maturity.';
	const featuredImageAlt = isPortuguese
		? 'Imagem de uma pessoa vetorizada, o logo do site da My Menthor'
		: 'picture of a vectorized person, the logo for My Menthor website';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	const ogImage = {
		url: ogImageSrc,
		alt: featuredImageAlt
	};
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt
	};

	const twitterImage = {
		url: twitterImageSrc,
		alt: featuredImageAlt
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2024-05-01T14:19:33.000+0100',
		lastUpdated: '2024-09-05T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		article: false,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage
	};
	// console.log(seoProps);
</script>

<SEO {...seoProps} />
<div in:fade={{ delay: 150, duration: 250 }}>
	<main>
		<Navbar2 />
		<!-- {#if loading} -->
		<!-- <div class="w-full h-screen flex justify-center items-center pb-24">
		<div class="loading-spinner"></div>
	</div> -->
		<!-- {:else} -->
		<Section1 />
		<Section2 />
		<Section3 />
		<Section4 />
		<Section7 />
		<Section6 />
	</main>
</div>

<!-- {/if} -->

<style>
	/* .loading-spinner {
		margin: 2rem auto;
		width: 50px;
		height: 50px;
		border: 5px solid #dfdad6;
		border-top-color: #333;
		border-radius: 50%;
		animation: spin 0.3s linear infinite;
	} */
	/* 
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	} */
</style>
