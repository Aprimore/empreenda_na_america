<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { EBOOK_REMOTEWORK_webp } from '$lib';
	import Footer from '$lib/components/Footer.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Navbar2 from '$lib/components/Navbar2.svelte';

	import { currentLocale } from '$lib/store.js';
	import { loadTranslations, locale } from '$lib/translations';
</script>

<nav class="max-w-2xl mx-auto border border-blue-950 rounded p-2 m-2">
	<div class="flex items-center justify-between text-blue-gray-900">
		<a
			href="/en"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE1
		</a>
		<a
			href="/en/template2"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE2
		</a>
		<a
			href="/en/template3"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE3
		</a>
		<a
			href="/en/template4"
			class="p-2 hover:bg-slate-200 mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			TEMPLATE4
		</a>
		<a
			href="/en/template5"
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
