<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { t, locale } from '$lib/translations';
	import { page } from '$app/stores';

	export let status = $page.status;
</script>

<section class="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800 Exo">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h1>{$t('error.error.happens')} ({status})</h1>
			<p>{$t(`error.${status}`, { default: $t('error.default') })}</p>
			<br />
			<br />
			{$locale} – {$t(`lang.${$locale}`)}

			<!-- <h2 class="Inter-Bold mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span class="sr-only">Error</span>404
			</h2>

			<p class="Lora text-2xl font-semibold md:text-3xl"></p>
			<p class="Lora mt-4 mb-8 dark:text-gray-600"></p>
			<a
				rel="noopener noreferrer"
				href="/"
				class="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 hover:dark:bg-violet-500 hover:dark:text-gray-100"
				>ERRO
			</a> -->
		</div>
	</div>
</section>
