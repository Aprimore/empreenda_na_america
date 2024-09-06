<script lang="ts">
	// import headerhero_webp from '$lib/assets/images/headerhero.webp?w=200;400;800&format=avif;webp;jpg&as=picture';
	// import * as m from '$lib/paraglide/messages';
	import { t } from '$lib/translations';
</script>

<section class="w-full max-sm:p-2 bg-[#dfdad6] text-balance">
	<div class="lg:max-w-screen-2xl mx-auto max-sm:p-2">
		<div class="lg:p-10 sm:p-5 flex max-md:flex-col">
			<div class="md:max-w-[45%] m-auto border-black align-middle">
				<h1 class="font-extrabold text-6xl xl:text-7xl uppercase">{$t('HERO_T')}</h1>
				<h2 class="font-bold text-xl lg:text-2xl mt-10">
					{$t('HERO_D')}
				</h2>
			</div>
			<div class="md:max-w-[50%] max-sm:mt-6 h-full"></div>
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
		font-family: 'Inter', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400; /* Regular weight for body text */
		font-style: normal;
	}
</style>
