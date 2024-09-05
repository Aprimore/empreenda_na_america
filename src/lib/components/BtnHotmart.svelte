<script>
	export let dynamicLink;
</script>

<a
	type="button"
	href={dynamicLink || '#'}
	target="_blank"
	class="bg-slate-100 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded-xl inline-flex items-center w-full"
>
	<!-- <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
		><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg
	> -->

	<!-- <a href="https://hotmart.com/pt-br" target="_blank"> -->
	<img
		class="fill-current w-4 h-4 mr-2 aspect-[4/3]"
		src="https://logosandtypes.com/wp-content/uploads/2023/02/hotmart.svg"
		loading="lazy"
		alt="hotmart icon"
	/>
	<!-- </a> -->
	<span>Download</span>
</a>
