<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import {
		// ebook1,
		ebook1_webp,
		// ebook2,
		ebook2_webp,
		// ebook3,
		ebook3_webp,
		// ebook4,
		ebook4_webp
	} from '$lib';
	import BtnHotmart from '$lib/components/BtnHotmart.svelte';
	import { t } from '$lib/translations';
</script>

<!-- {$t('xxxxx')} -->

<!-- EBOOK_REMOTEWORK EBOOK_MARKET -->
<section class="w-full max-sm:p-2 bg-white">
	<div class="lg:max-w-[90rem] mx-auto max-sm:p-2">
		<h2 class="text-3xl md:text-4xl lg:text-5xl text-center my-6">
			{$t('S1_T')}
		</h2>
		<div
			class="sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto sm:rounded-2xl lg:py-6 gap-3 max-sm:space-y-3"
		>
			<div
				class="bg-[#dfdad6] rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3 relative top-0">{$t('EBOOK_STARTUP')}</h3>
				<img
					class="object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook1_webp}
					alt=""
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart />
				</div>
			</div>
			<div
				class="bg-[#dfdad6] rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3">{$t('EBOOK_PLAN')}</h3>
				<img
					class="object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook2_webp}
					alt=""
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart />
				</div>
			</div>
			<div
				class="bg-[#dfdad6] rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3">{$t('EBOOK_KID_MONEY')}</h3>
				<img
					class="object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook3_webp}
					alt=""
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart />
				</div>
			</div>
			<div
				class="bg-[#dfdad6] rounded-2xl col-start-1 col-end-3 row-start-2 row-end-3 max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3">{$t('EBOOK_INVEST')}</h3>
				<img
					class="bg-[#dfdad6] rounded-2xl object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook4_webp}
					alt=""
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart />
				</div>
			</div>
			<div
				class="bg-[#dfdad6] rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3">{$t('EBOOK_EXTRACT')}</h3>
				<img
					class="object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook4_webp}
					alt=""
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart />
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

	h3 {
		font-family: 'Lora', serif;
		font-optical-sizing: auto;
		font-weight: 400; /* Regular weight for body text */
		font-style: normal;
	}
</style>
