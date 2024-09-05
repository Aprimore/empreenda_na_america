<script lang="ts">
	import { browser } from '$app/environment';
	import headerhero_webp from '$lib/assets/images/headerhero.webp?enhanced';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';

	let loading = true;

	onMount(() => {
		loading = false;
	});
</script>

{#if loading}
	<h1>Loading...</h1>
{:else}
	<section class="w-full max-sm:p-2 bg-[#dfdad6] text-balance h-screen">
		<div class="lg:max-w-screen-2xl mx-auto max-sm:p-0">
			<div class="lg:p-10 sm:p-5 flex max-md:flex-col items-center">
				<div class="md:max-w-[50%] m-auto border-black align-middle">
					<h1 class="font-extrabold text-4xl md:text-5xl xl:text-7xl uppercase">
						Entrepreneur in America: Your Complete Map to Success in the USA
					</h1>
					<h2 class="font-bold text-xl lg:text-2xl lg:mt-10 md:mt-5 mt-3">
						Discover exclusive strategies for business, investment, and financial education to grow
						in the United States.
					</h2>
				</div>
				<div class="relative w-full">
					<!-- Placeholder while loading -->
					<div class="skeleton-loader w-full h-full"></div>
					<enhanced:img
						style="width:100%; height:100%; object-fit:cover"
						src={headerhero_webp}
						alt="landing page header"
						loading="lazy"
						sizes="(min-width:1080px) 744px, (min-width:768px) 640px, 400px"
					/>
				</div>
			</div>
		</div>
	</section>
{/if}

<style>
	* {
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700; /* Bold weight for titles */
		font-style: normal;
	}
	/* Skeleton Loader Style */
	.skeleton-loader {
		background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
		background-size: 200% 100%;
		animation: shimmer 1.5s infinite;
	}
</style>
