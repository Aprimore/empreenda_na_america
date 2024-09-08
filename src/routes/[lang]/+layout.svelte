<script lang="ts">
	import '@fontsource-variable/lora';
	import '@fontsource-variable/inter';
	// import { browser } from '$app/environment';
	import { EBOOK_REMOTEWORK_webp } from '$lib';
	import Footer from '$lib/components/Footer.svelte';
	import '../../app.css';

	// import { page } from '$app/stores';

	// $: ({ route } = $page.data);
</script>

<main>
	<slot />
</main>
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
	}
	:global(.Lora) {
		font-family: 'Lora Variable', serif;
		font-weight: 400;
		font-optical-sizing: auto;
		font-style: normal;
	}
	:global(.Lora-Bold) {
		font-family: 'Lora Variable', serif;
		font-weight: 700;
		font-optical-sizing: auto;
		font-style: normal;
	}
	:global(.Inter) {
		font-family: 'Inter Variable', sans-serif;
		font-weight: 400;
		font-optical-sizing: auto;
		font-style: normal;
	}

	:global(.Inter-Bold) {
		font-family: 'Inter Variable', sans-serif;
		font-weight: 700;
		font-optical-sizing: auto;
		font-style: normal;
	}
</style>
