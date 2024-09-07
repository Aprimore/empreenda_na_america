<!-- // ?????? -->

<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<section
	class="w-full max-sm:p-2 bg-gradient-to-b from-gray-900 via-purple-900 to-black
 text-balance"
	data-sveltekit-preload-data="viewport"
>
	<div class="lg:max-w-screen-lg mx-auto max-sm:p-2">
		<div class="p-5 flex max-md:flex-col">
			<div class=" border-black">
				<h2 class="Inter-Bold text-3xl md:text-4xl uppercase">{$t('S5_T')}</h2>
				<p class="Lora text-lg max-sm:text-md my-6 text-center">
					{$t('S5_D')}
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	/* * {
		border: black 1px solid;
	} */
</style>
