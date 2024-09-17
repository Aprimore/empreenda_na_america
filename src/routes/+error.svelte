<script lang="ts">
	import '../app.postcss';
	// import * as m from '$lib/paraglide/messages';
	// import { t, locale } from '$lib/translations';
	// import { page } from '$app/stores';
	// export let status = $page.status;
</script>

<!-- <section class="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800 Exo">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h1>{$t('error.error.happens')} ({status})</h1>
			<p>{$t(`error.${status}`, { default: $t('error.default') })}</p>
			<br />
			<br />
			{$locale} – {$t(`lang.${$locale}`)}

			<h2 class="Inter-Bold mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span class="sr-only">Error</span>404
			</h2>

			<p class="Lora text-2xl font-semibold md:text-3xl"></p>
			<p class="Lora mt-4 mb-8 dark:text-gray-600"></p>
			<a
				rel="noopener noreferrer"
				href="#"
				class="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 hover:dark:bg-violet-500 hover:dark:text-gray-100"
				>ERRO
			</a>
		</div>
	</div>
</section> -->
<!--
  This example requires updating your template:

  ```
  <html class="h-full">
  <body class="h-full">
  ```
-->

<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="text-7xl font-semibold text-indigo-600">404</p>
		<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
		<p class="mt-6 text-base leading-7 text-gray-600">
			Sorry, we couldn’t find the page you’re looking for.
		</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<a
				href="#"
				class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Go back home</a
			>
			<!-- <a href="#" class="text-sm font-semibold text-gray-900"
				>Contact support <span aria-hidden="true">&rarr;</span></a
			> -->
		</div>
	</div>
</main>
