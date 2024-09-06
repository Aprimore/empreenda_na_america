<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { EBOOK_REMOTEWORK_webp } from '$lib';
	import Footer from '$lib/components/Footer.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	// import Navbar from '$lib/components/Navbar.svelte';
	// import Navbar2 from '$lib/components/Navbar2.svelte';
	import { currentLocale } from '$lib/store.js';

	export let data;
	const localeUrl = data.locale;
	// console.log(data);
</script>

<nav class="max-w-2xl mx-auto border border-blue-950 rounded p-2 m-2">
	<div class="flex items-center justify-between text-blue-gray-900">
		<a
			href="/{localeUrl}/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE1
		</a>
		<a
			href="/{localeUrl}/template2/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE2
		</a>
		<a
			href="/{localeUrl}/template3/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE3
		</a>
		<a
			href="/{localeUrl}/template4/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE4
		</a>
		<a
			href="/{localeUrl}/template5/"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE5
		</a>
	</div>
</nav>
<main>
	<slot />
</main>
<Footer />
