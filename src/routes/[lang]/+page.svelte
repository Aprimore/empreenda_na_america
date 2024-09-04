<script>
	import Section1 from '$lib/components/Home/Section1.svelte';
	import Section2 from '$lib/components/Home/Section2.svelte';
	import Section3 from '$lib/components/Home/Section3.svelte';
	import Section4 from '$lib/components/Home/Section4.svelte';
	import Section6 from '$lib/components/Home/Section6.svelte';
	import Section7 from '$lib/components/Home/Section7.svelte';
	import { onMount } from 'svelte';
	let loading = true;
	// import Section2 from '$lib/components/Home/Section2.svelte';

	// let Section2, Section3, Section4, Section6, Section7;
	// Function to load the sections dynamically
	// async function loadSections() {
	// 	Section2 = (await import('$lib/components/Home/Section2.svelte')).default;
	// 	Section3 = (await import('$lib/components/Home/Section3.svelte')).default;
	// 	Section4 = (await import('$lib/components/Home/Section4.svelte')).default;
	// 	Section6 = (await import('$lib/components/Home/Section6.svelte')).default;
	// 	Section7 = (await import('$lib/components/Home/Section7.svelte')).default;

	// 	loading = false; // Set loading to false after all sections are loaded
	// }

	// Load sections after the page has rendered Section1
	// loadSections();

	onMount(() => {
		// setTimeout(() => {}, 5000); // Adjust the delay as needed
	loading = false;
	});
</script>

<!-- Section 1 loads immediately -->

{#if loading}
	<!-- Placeholder or spinner while other sections are loading -->
	<div class="w-full h-screen flex justify-center items-center pb-24">
		<div class="loading-spinner"></div>
	</div>
{:else}
	<!-- Sections 2 to 7 load after Section 1 -->
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Section7 />
	<Section6 />
	<!-- {#if Section2}<Section2 />{/if}
	{#if Section3}<Section3 />{/if}
	{#if Section4}<Section4 />{/if}
	{#if Section7}<Section7 />{/if}
	{#if Section6}<Section6 />{/if} -->
{/if}

<style>
	.loading-spinner {
		/* Simple spinner styles */
		margin: 2rem auto;
		width: 50px;
		height: 50px;
		border: 5px solid #dfdad6;
		border-top-color: #333;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
