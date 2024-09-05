<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import {
		EBOOK_EXTRACT2_webp,
		EBOOK_EXTRACT_webp,
		EBOOK_KID_MONEY_webp,
		EBOOK_MARKET_webp,
		EBOOK_PLAN_webp,
		EBOOK_REMOTEWORK_webp,
		EBOOK_STARTUP_webp
	} from '$lib';
	import BtnHotmart from '$lib/components/BtnHotmart.svelte';
	import { t } from '$lib/translations';

	let ebookLinks = {
		EBOOK_STARTUP: 'https://go.hotmart.com/D93514468N',
		EBOOK_PLAN: 'https://go.hotmart.com/R93809763S',
		EBOOK_KID_MONEY: 'https://go.hotmart.com/C93777626P',
		EBOOK_EXTRACT: 'https://go.hotmart.com/J94047143K',
		EBOOK_REMOTEWORK: 'https://go.hotmart.com/G93758018K',
		EBOOK_MARKET: 'https://go.hotmart.com/I93879420X'
	};
</script>

<!-- {$t('xxxxx')} -->

<!-- EBOOK_REMOTEWORK EBOOK_MARKET -->
<section class="w-full max-sm:p-2 py-10" data-sveltekit-preload-data="viewport">
	<div class="lg:max-w-[90rem] mx-auto max-sm:p-2">
		<h2 class="text-4xl md:text-4xl lg:text-5xl text-center my-6">{$t('S5_T')}</h2>
		<p class="text-2xl max-sm:text-xl my-6 text-center lg:px-10 px-3">
			{$t('S5_D')}
		</p>
		<div
			class="sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto sm:rounded-2xl lg:py-6 gap-3 max-sm:space-y-3 text-white"
		>
			<!----------------------- EBOOK_STARTUP ------------------------------------->
			<div
				class="bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<p class="text-2xl text-center p-3 relative top-0">{$t('EBOOK_STARTUP')}</p>
				<img
					class="object-contain aspect-[4/3] max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={EBOOK_STARTUP_webp}
					loading="lazy"
					alt="ebook image"
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart dynamicLink={ebookLinks.EBOOK_STARTUP} />
				</div>
			</div>
			<!----------------------- EBOOK_PLAN ------------------------------------->

			<div
				class="bg-gradient-to-b from-emerald-500 to-emerald-400
 rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<p class="text-2xl text-center p-3">{$t('EBOOK_PLAN')}</p>
				<img
					class="object-contain aspect-[4/3] max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={EBOOK_PLAN_webp}
					loading="lazy"
					alt="ebook image"
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart dynamicLink={ebookLinks.EBOOK_PLAN} />
				</div>
			</div>
			<!----------------------- EBOOK_KID_MONEY ------------------------------------->

			<div
				class="bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<p class="text-2xl text-center p-3">{$t('EBOOK_KID_MONEY')}</p>
				<img
					class="object-contain aspect-[4/3] max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={EBOOK_KID_MONEY_webp}
					loading="lazy"
					alt="ebook image"
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart dynamicLink={ebookLinks.EBOOK_KID_MONEY} />
				</div>
			</div>
			<!----------------------- EBOOK_EXTRACT ------------------------------------->

			<div
				class="bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl row-end-3 max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<p class="text-2xl text-center p-3">{$t('EBOOK_EXTRACT')}</p>
				<img
					class="bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl object-contain aspect-[4/3] max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={EBOOK_EXTRACT_webp}
					loading="lazy"
					alt="ebook image"
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart dynamicLink={ebookLinks.EBOOK_EXTRACT} />
				</div>
			</div>
			<!----------------------- EBOOK_REMOTEWORK ------------------------------------->

			<div
				class="bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<p class="text-2xl text-center p-3">{$t('EBOOK_REMOTEWORK')}</p>
				<img
					class="object-contain aspect-[4/3] max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={EBOOK_REMOTEWORK_webp}
					loading="lazy"
					alt="ebook image"
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart dynamicLink={ebookLinks.EBOOK_REMOTEWORK} />
				</div>
			</div>
			<!----------------------- EBOOK_MARKET ------------------------------------->

			<div
				class="bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<p class="text-2xl text-center p-3">{$t('EBOOK_MARKET')}</p>
				<img
					class="object-contain aspect-[4/3] max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={EBOOK_MARKET_webp}
					loading="lazy"
					alt="ebook image"
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart dynamicLink={ebookLinks.EBOOK_MARKET} />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* .parent {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.div2 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.div3 {
		grid-area: 1 / 3 / 2 / 4;
	}
	.div4 {
		grid-area: 2 / 1 / 3 / 3;
	}
	.div5 {
		grid-area: 2 / 3 / 3 / 4;
	} */
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
