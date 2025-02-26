<script lang="ts">
	// src/routes/[lang]/v1/blog/+page.svelte
	// import { localeNav } from '$lib/stores/languageStore'; // Importe a store global
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import SEO from '$lib/components/SEO/index.svelte';
	import website from '$lib/config/website';
	import { page } from '$app/stores';
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt/');

	// let currentLang;
	// $: $currentLang = $localeNav; // Reage à mudança da store `locale`
	// onMount(() => {
	// 	document.documentElement.lang = currentLang; // Atualiza o atributo lang no <html> toda vez que o idioma mudar
	// });
	export let data;
	// console.log(data.slug.lang);

	// document.documentElement.lang = data.slug.lang;

	// console.log(document.documentElement.lang);
	// console.log(data);
	const { author, siteUrl } = website;
	let title = 'Blog';

	const breadcrumbs = [
		{ name: 'Home', slug: `/${data.slug.lang}` },
		{ name: 'Blog', slug: `/v1/blog` }
	];

	let metadescription = isPortuguese ? 'Empreendendo na America' : 'Empreendendo na America';
	const featuredImageAlt = isPortuguese ? 'Alt' : 'Alt';
	// const featuredImage = {
	// 	url: featuredImageSrc,
	// 	alt: featuredImageAlt,
	// 	width: 672,
	// 	height: 448,
	// 	caption: 'Home page'
	// };
	// const ogImage = {
	// 	url: ogImageSrc,
	// 	alt: featuredImageAlt
	// };
	// const ogSquareImage = {
	// 	url: ogSquareImageSrc,
	// 	alt: featuredImageAlt
	// };

	// const twitterImage = {
	// 	url: twitterImageSrc,
	// 	alt: featuredImageAlt
	// };
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: pagePath.substring(1),
		entityMeta,
		datePublished: '2024-05-07T14:19:33.000+0100',
		lastUpdated: '2024-09-08T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		article: true
		// featuredImage,
		// ogImage,
		// ogSquareImage,
		// twitterImage
	};

	// console.log(data.posts);
	// console.log(data.pathname);

	// console.log(document.documentElement.lang);
</script>

<SEO {...seoProps} />

<section
	in:fade={{ delay: 0, duration: 150, easing: cubicInOut }}
	class="blog-list sm:bg-[#F1F1F9] w-full rounded-lg max-sm:p-2 Exo"
>
	<div class="max-sm:bg-[#F1F1F9] max-w-screen-2xl mx-auto flex-col lg:flex-row rounded-lg p-4">
		<nav class="flex flex-wrap items-center text-sm mb-3">
			{#each breadcrumbs as breadcrumb, i}
				<a
					href={i === 0 ? breadcrumb.slug : `/${data.slug.lang}${breadcrumb.slug}`}
					class="text-blue-800 transition-colors duration-300 hover:!text-green-600"
				>
					{breadcrumb.name}
				</a>

				{#if i < breadcrumbs.length - 1}
					<span class="mx-2 text-gray-400">/</span>
				{/if}
			{/each}
		</nav>

		<h1 class="text-3xl font-bold mb-6">Blog Posts</h1>
		{#if data.posts && data.posts.length > 0}
			<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{#each data.posts as post}
					<li class="group" in:fade={{ delay: 100, duration: 500, easing: cubicInOut }}>
						<a
							href="{data.pathname.endsWith('/')
								? data.pathname
								: data.pathname + '/'}{post.databaseId}/{post.slug}/"
							class="block h-full"
						>
							<article
								class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
							>
								{#if post.featuredImage?.node?.sourceUrl}
									<img
										width="356"
										height="208"
										src={post.featuredImage.node.sourceUrl}
										alt={post.title}
										class="w-full h-52 object-cover"
									/>
								{/if}
								<div class="p-4 flex-grow flex flex-col">
									<h2 class="text-xl font-semibold mb-2 group-hover:underline">
										{post.title}
									</h2>
									<p class="text-sm text-gray-600 mb-2">
										{new Date(post.date).toLocaleDateString()}
									</p>
									<div class="text-sm text-gray-700 flex-grow">
										{@html post.excerpt}
									</div>
								</div>
							</article>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No posts found.</p>
		{/if}
	</div>
</section>

<style>
	.blog-list a {
		text-decoration: none;
		color: inherit;
	}
</style>
