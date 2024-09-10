<!-- EBOOK HIGHLIGHTS -->
<script lang="ts">
	// register Swiper elements
	import { register } from 'swiper/element/bundle';
	import BtnHotmart from '$lib/components/BtnHotmart.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	export let data;

	// let pagePath = $page.url.pathname;
	// $: pagePath = $page.url.pathname;
	// console.log(`DDD@#!!@#!@#21312`,pagePath);
	onMount(async () => {
		if (browser) {
			await register();
		}
	});

	const spaceBetween = 10;

	// event handlers for Swiper events
	const onProgress = (e: any) => {
		const [swiper, progress] = e.detail;
	};
	// const onSlideChange = (e: any) => {};

	// Import Swiper styles
	import 'swiper/swiper-bundle.css';
	// import * as m from '$lib/paraglide/messages';
	import {
		EBOOK_IADVOCATICIA2_webp,
		EBOOK_IADVOCATICIA_webp,
		EBOOK_KID_MONEY_webp,
		EBOOK_MARKET_webp,
		EBOOK_PLAN_webp,
		EBOOK_REMOTEWORK_webp,
		EBOOK_STARTUP_webp,
		EBOOK_CELERIDADE_webp
	} from '$lib';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	// console.log(`BEROWSAERRe`, browser);

	// Logic to select the correct eBook links object
	let ebookLinks;
	if (data.lang === 'pt') {
		ebookLinks = {
			EBOOK_STARTUP: 'https://go.hotmart.com/D93514468N',
			EBOOK_PLAN: 'https://go.hotmart.com/R93809763S',
			EBOOK_KID_MONEY: 'https://go.hotmart.com/C93777626P',
			EBOOK_IADVOCATICIA: 'https://go.hotmart.com/J94047143K',
			EBOOK_REMOTEWORK: 'https://go.hotmart.com/G93758018K',
			EBOOK_MARKET: 'https://go.hotmart.com/I93879420X',
			EBOOK_CELERIDADE: 'https://go.hotmart.com/U95340400D'
		};
	} else if (data.lang === 'es') {
		ebookLinks = {
			EBOOK_STARTUP: 'XXXXXXXXXX',
			EBOOK_PLAN: 'XXXXXXXXXX',
			EBOOK_KID_MONEY:
				'https://toptier-andresilva.hotmart.host/educacion-financiera-905c5d8f-feff-4b88-9ab4-e044dfd20c8b',
			EBOOK_IADVOCATICIA: 'XXXXXXXXXX',
			EBOOK_REMOTEWORK: 'XXXXXXXXXX',
			EBOOK_MARKET: 'XXXXXXXXXX',
			EBOOK_CELERIDADE:
				'https://toptier-andresilva.hotmart.host/celeridade-e-eficiencia-processual-a-revolucao-da-i-a-na-pratica-da-advocacia-eecb78d8-b87e-40f2-85f5-b76f67e59e36'
		};
	} else {
		ebookLinks = {
			EBOOK_STARTUP: '#',
			EBOOK_PLAN: '#',
			EBOOK_KID_MONEY: '#',
			EBOOK_IADVOCATICIA: '#',
			EBOOK_REMOTEWORK: '#',
			EBOOK_MARKET: '#',
			EBOOK_CELERIDADE: '#'
		};
	}
</script>

<section class="text-balance py-16 background-img4" data-sveltekit-preload-data="viewport">
	<div class="lg:max-w-screen-lg sm:mx-auto max-sm:p-2">
		<h2 class="Inter-Bold text-3xl md:text-4xl text-center my-6">{$t('home.S5_T')}</h2>
		<p class="Lora text-md sm:text-xl my-6 text-center lg:px-10 px-3">
			{$t('home.S5_D')}
		</p>
		<!-- Swiper slider container with navigation enabled -->
		<swiper-container
			spaceBetween={30}
			lazy={true}
			navigation={true}
			manipulation={true}
			autoplay={true}
			class="mySwiper"
			space-between={spaceBetween}
			slides-per-view={1}
			breakpoints={{
				640: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1280: {
					slidesPerView: 3
				}
			}}
			speed={300}
			on:swiperprogress={onProgress}
		>
			<!-- loop={true} -->
			<!-- on:swiperslidechange={onSlideChange} -->
			<!-- Slider content -->
			<!----------------------- EBOOK_STARTUP ------------------------------------->
			<swiper-slide>
				<div
					class="p-2 bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl max-md:text-center section-bg"
				>
					<p class="Lora text-emerald-100 min-h-24 text-xl text-center relative top-0">
						{$t('home.EBOOK_STARTUP')}
					</p>
					<img
						class=" size-52 m-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={EBOOK_STARTUP_webp}
						loading="lazy"
						alt="ebook"
					/>
					<div class="ml-auto w-fit mt-3">
						<BtnHotmart dynamicLink={$t('home.HOTMART_EBOOK_STARTUP')} />
					</div>
				</div></swiper-slide
			>
			<div class="swiper-button-prev"></div>
			<!----------------------- EBOOK_PLAN ------------------------------------->
			<swiper-slide>
				<div
					class="p-2 bg-gradient-to-b from-emerald-500 to-emerald-400
 rounded-2xl max-md:text-center section-bg"
				>
					<p class="Lora text-emerald-100 min-h-24 text-xl text-center relative top-0">
						{$t('home.EBOOK_PLAN')}
					</p>
					<img
						class="size-52 m-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={EBOOK_PLAN_webp}
						loading="lazy"
						alt="ebook"
					/>
					<div class="ml-auto w-fit mt-3">
						<BtnHotmart dynamicLink={$t('home.HOTMART_EBOOK_PLAN')} />
					</div>
				</div></swiper-slide
			>
			<!----------------------- EBOOK_KID_MONEY ------------------------------------->
			<swiper-slide>
				<div
					class="p-2 bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl max-md:text-center section-bg"
				>
					<p class="Lora text-emerald-100 min-h-24 text-xl text-center relative top-0">
						{$t('home.EBOOK_KID_MONEY')}
					</p>
					<img
						class="size-52 m-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={EBOOK_KID_MONEY_webp}
						loading="lazy"
						alt="ebook"
					/>
					<div class="ml-auto w-fit mt-3">
						<BtnHotmart dynamicLink={$t('home.HOTMART_EBOOK_KID_MONEY')} />
					</div>
				</div></swiper-slide
			>
			<!----------------------- EBOOK_IADVOCATICIA ------------------------------------->
			<swiper-slide>
				<div
					class="p-2 bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl row-end-3 max-md:text-center section-bg"
				>
					<p class="Lora text-emerald-100 min-h-24 text-xl text-center relative top-0">
						{$t('home.EBOOK_IADVOCATICIA')}
					</p>
					<img
						class="size-52 m-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={EBOOK_IADVOCATICIA_webp}
						loading="lazy"
						alt="ebook"
					/>
					<div class="ml-auto w-fit mt-3">
						<BtnHotmart dynamicLink={$t('home.HOTMART_EBOOK_IADVOCATICIA')} />
					</div>
				</div></swiper-slide
			>
			<!----------------------- EBOOK_REMOTEWORK ------------------------------------->
			<swiper-slide>
				<div
					class="p-2 bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl max-md:text-center section-bg"
				>
					<p class="Lora text-emerald-100 min-h-24 text-xl text-center relative top-0">
						{$t('home.EBOOK_REMOTEWORK')}
					</p>
					<img
						class="size-52 m-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={EBOOK_REMOTEWORK_webp}
						loading="lazy"
						alt="ebook"
					/>
					<div class="ml-auto w-fit mt-3">
						<BtnHotmart dynamicLink={$t('home.HOTMART_EBOOK_REMOTEWORK')} />
					</div>
				</div></swiper-slide
			>
			<!----------------------- EBOOK_MARKET ------------------------------------->
			<swiper-slide>
				<div
					class="p-2 bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl max-md:text-center section-bg"
				>
					<p class="Lora text-emerald-100 min-h-24 text-xl text-center relative top-0">
						{$t('home.EBOOK_MARKET')}
					</p>
					<img
						class=" size-52 m-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={EBOOK_MARKET_webp}
						loading="lazy"
						alt="ebook"
					/>
					<div class="ml-auto w-fit mt-3">
						<BtnHotmart dynamicLink={$t('home.HOTMART_EBOOK_MARKET')} />
					</div>
				</div></swiper-slide
			>
			<!----------------------- EBOOK_CELERIDADE ------------------------------------->
			<swiper-slide>
				<div
					class="p-2 bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl max-md:text-center section-bg"
				>
					<p class="Lora text-emerald-100 min-h-24 text-xl text-center relative top-0">
						{$t('home.EBOOK_CELERIDADE')}
					</p>
					<img
						class=" size-52 m-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={EBOOK_CELERIDADE_webp}
						loading="lazy"
						alt="ebook"
					/>
					<div class="ml-auto w-fit mt-3">
						<BtnHotmart dynamicLink={$t('home.HOTMART_EBOOK_CELERIDADE')} />
					</div>
				</div></swiper-slide
			>
		</swiper-container>
	</div>
</section>

<style>
	.section-bg {
		background-image: url('$lib/assets/svg/patterns/dragon-scales.svg');
		background-size: contain;
		background-repeat: repeat;
		background-position: center;
	}

	.background-img4 {
		background-image: url('$lib/assets/svg/patterns/brushed-alum-dark.png');
	}
</style>
