<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<section
	class="w-full max-sm:p-2 bg-gradient-to-b from-gray-900 via-purple-900 to-black
 text-balance"
	data-sveltekit-preload-data="viewport"
>
	<div class="lg:max-w-[90rem] mx-auto max-sm:p-2">
		<div class="lg:p-10 sm:p-5 flex max-md:flex-col">
			<div class=" border-black">
				<h2 class="font-extrabold text-3xl xl:text-5xl uppercase">{$t('S5_T')}</h2>
				<p class="text-2xl max-sm:text-xl my-6 text-center">
					{$t('S5_D')}
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	h2 {
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700; /* Bold weight for titles */
		font-style: normal;
	}

	p {
		font-family: 'Lora', serif;
		font-optical-sizing: auto;
		font-weight: 400; /* Regular weight for body text */
		font-style: normal;
	}
</style>
