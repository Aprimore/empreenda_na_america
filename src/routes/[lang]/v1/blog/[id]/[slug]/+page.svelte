<script lang="ts">
	// import { post } from '$app/stores';
	// import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { page } from '$app/stores';
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	// const isPortuguese = pagePath.startsWith('/pt-BR/');

	export let data;

	function formatDateToISO(dateString) {
		const date = new Date(dateString);
		return date.toISOString();
	}

	import SEO from '$lib/components/SEO/index.svelte';
	import website from '$lib/config/website';
	const { author, siteUrl } = website;

	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: data.post.title,
			slug: pagePath.substring(1)
		}
	];

	// let metadescription = isPortuguese
	// 	? 'O Blog da My Menthor traz mais de 20 anos de experiência em consultoria de gestão organizacional, compartilhando insights e estratégias sobre Gestão de Arquitetura Empresarial. Explore artigos sobre melhores práticas, tendências do setor e como aproveitar plataformas SaaS para impulsionar o sucesso empresarial.'
	// 	: 'The My Menthor Blog brings over 20 years of expertise in organizational management consulting, sharing insights and strategies on Enterprise Architecture Management. Explore articles on best practices, industry trends, and how to leverage SaaS platforms to drive business success.';
	// const featuredImageAlt = isPortuguese
	// 	? 'Imagem de uma pessoa vetorizada, o logo do site da My Menthor'
	// 	: 'picture of a vectorized person, the logo for My Menthor website';
	const featuredImage = {
		url: data.post.featuredImage.node.sourceUrl,
		// alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: data.post.title
	};
	const ogImage = {
		url: data.post.featuredImage.node.sourceUrl
		// alt: featuredImageAlt
	};
	const ogSquareImage = {
		url: data.post.featuredImage.node.sourceUrl
		// alt: featuredImageAlt
	};

	const twitterImage = {
		url: data.post.featuredImage.node.sourceUrl
		// alt: featuredImageAlt
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title: data.post.title,
		slug: pagePath.substring(1),
		entityMeta,
		datePublished: formatDateToISO(data.post.date),
		lastUpdated: formatDateToISO(data.post.modified),
		breadcrumbs,
		metadescription: data.post.seo.opengraphDescription,
		article: true,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage
	};
</script>

<SEO {...seoProps} />
<section
	in:fade={{ delay: 0, duration: 150, easing: cubicInOut }}
	class="sm:bg-[#F1F1F9] w-full items-center relative rounded-lg max-sm:p-2 py-5 Exo"
>
	<div
		class="max-sm:bg-[#F1F1F9] md:max-w-screen-2xl flex flex-col lg:flex-row mx-auto md:pr-96 items-center rounded-lg"
	>
		<div class="max-lg:p-5 space-y-6 mt-8 lg:mt-16 max-lg:order-1 mx-auto">
			{#if data.post}
				<article class="prose lg:prose-xl">
					<h1 class="text-4xl font-bold mb-8">{data.post.title}</h1>
					{#if data.post.featuredImage?.node?.sourceUrl}
						<img
							src={data.post.featuredImage.node.sourceUrl}
							alt={data.post.title}
							class="mb-4 rounded-lg shadow-lg"
						/>
					{/if}
					<div class="text-gray-600 mb-4">
						<p>{new Date(data.post.date).toLocaleDateString()}</p>
					</div>
					<div>
						<article class="prose lg:prose-xl">
							{@html data.post.content}
						</article>
					</div>
				</article>
			{:else}
				<p>Loading...</p>
			{/if}
		</div>
	</div>
</section>
