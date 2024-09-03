<script lang="ts">
	import { headerhero_webp } from "$lib";

	// import * as m from '$lib/paraglide/messages';
</script>

<section class="w-full max-sm:p-2 bg-[#dfdad6]">
	<div class="lg:max-w-[90rem] mx-auto max-sm:p-2">
		<div class="lg:p-10 p-5 flex max-md:flex-col">
			<div class="md:max-w-[50%] m-auto border-black align-middle">
				<h1 class="font-extrabold text-6xl xl:text-8xl">TO SUCCEED YOU MUST READ</h1>
				<h2 class="font-bold text-xl lg:text-2xl mt-10">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium suntodio,
					doloribus repellat minima doloremque unde asperiores quo maiores ipsa pariatur ea quod?
				</h2>
			</div>
			<div class="md:max-w-[50%] max-sm:mt-6 h-full">
				<img
					class="w-full h-auto aspect-[4/3]"
					src={headerhero_webp}
					loading="eager"
					alt="hotmart icon"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	h1 {
		font-family: 'Lora', sans-serif;
		font-optical-sizing: auto;
		font-weight: 700; /* Bold weight for titles */
		font-style: normal;
	}

	h2 {
		font-family: 'Lora', sans-serif;
		font-optical-sizing: auto;
		font-weight: 400; /* Regular weight for body text */
		font-style: normal;
	}
</style>
