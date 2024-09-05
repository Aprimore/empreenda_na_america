<script>
	import Section1 from '$lib/components/Home2/Section1.svelte';
	import Section2 from '$lib/components/Home2/Section2.svelte';
	import Section3 from '$lib/components/Home2/Section3.svelte';
	import Section4 from '$lib/components/Home2/Section4.svelte';
	import Section6 from '$lib/components/Home2/Section6.svelte';
	import Section7 from '$lib/components/Home2/Section7.svelte';
	import { onMount } from 'svelte';
	let loading = true;

	onMount(() => {
		// setTimeout(() => {}, 5000); // Adjust the delay as needed
		loading = false;
	});
</script>

{#if loading}
	<div class="w-full h-screen flex justify-center items-center pb-24">
		<div class="loading-spinner"></div>
	</div>
{:else}
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Section7 />
	<Section6 />
{/if}

<style>
	.loading-spinner {
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
