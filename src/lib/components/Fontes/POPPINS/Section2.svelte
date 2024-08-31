<script lang="ts">
	// import * as m from '$lib/paraglide/messages';
	import { ebook1, ebook2, ebook3, ebook4, ebook5 } from '$lib';
	import BtnHotmart from '$lib/components/BtnHotmart.svelte';
</script>

<section class="w-full max-sm:p-2 bg-white">
	<div class="lg:max-w-[90rem] mx-auto max-sm:p-2">
		<h2 class="text-3xl md:text-4xl lg:text-5xl text-center my-6">
			Deserunt quo officia incidunt nostrum ipsam, aut, veniam provident fuga necessitatibus nemo
		</h2>
		<div
			class="sm:grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto sm:rounded-2xl lg:py-6 gap-3 max-sm:space-y-3"
		>
			<div
				class="bg-[#dfdad6] rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3 relative top-0">Lorem Epsium</h3>
				<img
					class="object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook1}
					alt=""
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart />
				</div>
			</div>
			<div
				class="bg-[#dfdad6] rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3">Lorem Epsium</h3>
				<img
					class="object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook2}
					alt=""
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart />
				</div>
			</div>
			<div
				class="bg-[#dfdad6] rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3">Lorem Epsium</h3>
				<img
					class="object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook3}
					alt=""
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart />
				</div>
			</div>
			<div
				class="bg-[#dfdad6] rounded-2xl col-start-1 col-end-3 row-start-2 row-end-3 max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3">Lorem Epsium</h3>
				<img
					class="bg-[#dfdad6] rounded-2xl object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook4}
					alt=""
				/>
				<div class="ml-auto w-fit mt-3">
					<BtnHotmart />
				</div>
			</div>
			<div
				class="bg-[#dfdad6] rounded-2xl max-md:flex lg:flex lg:flex-col max-md:flex-col max-md:text-center p-3"
			>
				<h3 class="text-2xl text-center p-3">Lorem Epsium</h3>
				<img
					class="object-contain max-h-72 max-md:maxh-60 mx-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
					src={ebook5}
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
		font-family: "Poppins", sans-serif;
		font-optical-sizing: auto;
		font-weight: 700; /* Bold weight for titles */
		font-style: normal;
	}

	h3 {
		font-family: "Poppins", sans-serif;
		font-optical-sizing: auto;
		font-weight: 400; /* Regular weight for body text */
		font-style: normal;
	}
</style>
