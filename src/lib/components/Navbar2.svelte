<script>
	import { t, locales, locale } from '$lib/translations';
	import { toptier_webp } from '$lib';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { page } from '$app/stores';
	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;

	// Regex pattern to detect blog post URLs
	const isBlogPost = /^\/(pt|es)\/v1\/blog\/\d+\/[^/]+\/?$/.test(pagePath);

	const isPortuguese = pagePath.startsWith('/pt/');
	// console.log(isPortuguese);
	// const blogHref = isPortuguese ? '/pt/v1/blog/' : '/es/v1/blog/';

	// Reactive statement to update the blogHref dynamically
	$: blogHref = $locale === 'pt' ? '/pt/v1/blog/' : '/es/v1/blog/';
	$: logoUrl = $locale === 'pt' ? '/pt/' : '/es/';

	// const navItems = [{ href: '/v1/blog', label: 'Blog' }];
	// $: navbarClasses = `bg-opacity-0 text-base text-[#17193B] p-3 transition-transform transform hover:-translate-y-1 hover:bg-[#20C997] rounded-lg hover:text-[#F1F1F9] Exo bg-[#F1F1F9] `;
	// $: currentLanguage = languageTag();
	// $: isSourceLanguage = currentLanguage === sourceLanguageTag;

	// function getHref(basePath: string) {
	// 	return isSourceLanguage ? basePath : `/${currentLanguage}${basePath}`;
	// }

	// const navbarClasses = `flex justify-end self-end text-base px-6 py-3.5 transition-transform transform hover:-translate-y-1 hover:bg-[#20C997] rounded-md hover:text-[#F1F1F9] bg-[#F1F1F9] `;
</script>

<nav
	class="bg-green-500 block px-6 py-3 mx-auto text-[#4A4A4A] shadow-xs bg-opacity-80 top-0 left-0 section-nav-bg"
>
	<div class="flex max-w-screen-xl mx-auto">
		<div class="flex w-1/2 justify-start">
			<a
				href={logoUrl}
				class=" mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
			>
				<img
					src={toptier_webp}
					class="aspect-square transition-transform transform hover:-translate-y-1"
					alt="toptier"
					width="80"
					height="80"
				/>
			</a>

			<!-- <button
			class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
			type="button"
			title="burger icon"
		>
			<span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
				<svg
					xmlns="https://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					aria-hidden="true"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					></path>
				</svg>
			</span>
		</button> -->
		</div>
		<div class="flex w-1/2 justify-end items-center gap-3">
			<a
				class="flex items-center bg-[#f1f1f9] border-none p-3 rounded-md cursor-pointer text-base px-6 py-3 transition-transform transform hover:-translate-y-0.5 hover:bg-[#baffd1]"
				href={blogHref}>Blog</a
			>
			{#if !isBlogPost}
				<LanguageSwitcher />
			{/if}
		</div>
	</div>
</nav>

<style>
	/* * {
		border: black 1px solid;
	}
	a {
		font-size: large;
	} */
	.section-nav-bg {
		background-image: url('$lib/assets/svg/patterns/subtle-prism.svg');
		/* background-image: url('$lib/assets/svg/patterns/dragon-scales.svg'); */
		background-size: contain;
		background-repeat: repeat;
		background-position: center;
	}
</style>
