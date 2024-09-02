<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<section class="w-full max-sm:p-2 bg-[#dfdad6] text-balance">
	<div class="max-w-screen-xl mx-auto max-sm:p-2">
		<div class="lg:p-10 sm:p-5 flex max-md:flex-col">
			<div class=" border-black">
				<h1 class=" font-extrabold text-3xl xl:text-5xl uppercase">{$t('S7_T')}</h1>
				<h2 class="font-bold text-xl lg:text-2xl mt-10">
					{$t('S7_D')}
				</h2>
			</div>
		</div>
	</div>
</section>

<style>
	h1 {
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700; /* Bold weight for titles */
		font-style: normal;
	}

h2 {
		font-family: 'Lora', serif;
		font-optical-sizing: auto;
		font-weight: 400; /* Regular weight for body text */
		font-style: normal;
	}
</style>
