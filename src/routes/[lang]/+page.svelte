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
	import { t } from '$lib/translations';

	// let loading = true;
	// onMount(() => {
	// 	loading = false;
	// });

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;

	const isPortuguese = pagePath.startsWith('/pt/');

	const { author, siteUrl } = website;
	let title = isPortuguese ? 'Início | Empreenda na América' : 'Inicio | Empreende en América';
	const breadcrumbs = [
		{
			name: isPortuguese ? 'Início' : 'Inicio',
			slug: ''
		}
	];

	let metadescription = isPortuguese
		? 'Descubra estratégias exclusivas para imigrantes hispanos e brasileiros empreenderem nos EUA. Acesse e-books, vídeos e guias práticos para transformar suas ideias em negócios de sucesso. Aprenda sobre planejamento financeiro, inteligência artificial e muito mais para garantir um futuro seguro e próspero!'
		: 'Descubra estrategias exclusivas para que inmigrantes hispanos y brasileños emprendan en los EE.UU. Acceda a e-books, videos y guías prácticas para transformar sus ideas en negocios exitosos. Aprenda sobre planificación financiera, inteligencia artificial y mucho más para asegurar un futuro seguro y próspero.';
	const featuredImageAlt = isPortuguese
		? 'imagem  vetorizada da logo do website escrito toptier'
		: 'imagen vectorizada del logo del sitio web con el texto toptier';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: isPortuguese ? 'Início' : 'Inicio'
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
		datePublished: '2024-09-01T14:19:33.000+0100',
		lastUpdated: '2024-09-14T14:19:33.000+0100',
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
		<Section1 />
		<Section2 />
		<Section3 />
		<Section4 />
		<Section7 />
		<Section6 />
	</main>
</div>
