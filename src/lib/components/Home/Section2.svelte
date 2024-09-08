<!-- EBOOK HIGHLIGHTS -->
<script lang="ts">
	// register Swiper elements
	import { register } from 'swiper/element/bundle';

	register();

	const spaceBetween = 10;

	// event handlers for Swiper events
	const onProgress = (e: any) => {
		const [swiper, progress] = e.detail;
	};
	const onSlideChange = (e: any) => {};

	// Import Swiper styles
	import 'swiper/swiper-bundle.css';
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

<!-- EBOOK_REMOTEWORK EBOOK_MARKET -->
<!-- <section class="w-full max-sm:p-2 py-10 background-img1" data-sveltekit-preload-data="viewport">
 -->
<section class="w-full max-sm:p-2 py-10 background-img4" data-sveltekit-preload-data="viewport">
	<div class="lg:max-w-screen-lg mx-auto max-sm:p-2">
		<div></div>
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
			loop={true}
			speed={300}
			on:swiperprogress={onProgress}
			on:swiperslidechange={onSlideChange}
		>
			<!-- Slider content -->
			<swiper-slide
				><!----------------------- EBOOK_STARTUP ------------------------------------->
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
						<BtnHotmart dynamicLink={ebookLinks.EBOOK_STARTUP} />
					</div>
				</div></swiper-slide
			>
			<div class="swiper-button-prev"></div>
			<swiper-slide>
				<!----------------------- EBOOK_PLAN ------------------------------------->
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
						<BtnHotmart dynamicLink={ebookLinks.EBOOK_PLAN} />
					</div>
				</div></swiper-slide
			>
			<swiper-slide>
				<!----------------------- EBOOK_KID_MONEY ------------------------------------->

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
						<BtnHotmart dynamicLink={ebookLinks.EBOOK_KID_MONEY} />
					</div>
				</div></swiper-slide
			>
			<swiper-slide
				><!----------------------- EBOOK_EXTRACT ------------------------------------->

				<div
					class="p-2 bg-gradient-to-b from-emerald-500 to-emerald-400 rounded-2xl row-end-3 max-md:text-center section-bg"
				>
					<p class="Lora text-emerald-100 min-h-24 text-xl text-center relative top-0">
						{$t('home.EBOOK_EXTRACT')}
					</p>
					<img
						class="size-52 m-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={EBOOK_EXTRACT_webp}
						loading="lazy"
						alt="ebook"
					/>
					<div class="ml-auto w-fit mt-3">
						<BtnHotmart dynamicLink={ebookLinks.EBOOK_EXTRACT} />
					</div>
				</div></swiper-slide
			>
			<swiper-slide
				><!----------------------- EBOOK_REMOTEWORK ------------------------------------->

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
						<BtnHotmart dynamicLink={ebookLinks.EBOOK_REMOTEWORK} />
					</div>
				</div></swiper-slide
			>
			<swiper-slide
				><!----------------------- EBOOK_MARKET ------------------------------------->

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
						<BtnHotmart dynamicLink={ebookLinks.EBOOK_MARKET} />
					</div>
				</div></swiper-slide
			>

			<!-- Add as many swiper slides as needed -->
		</swiper-container>
		<!-- {$t('home.xxxxx')} -->
		<!-- <div
			class="sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto sm:rounded-2xl lg:py-6 gap-3 max-sm:space-y-3 text-emerald-100"
		>
		</div> -->
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
