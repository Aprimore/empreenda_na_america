<script>
	import { hotmart_svg } from '$lib';

	export let dynamicLink;
</script>

<a
	type="button"
	href={dynamicLink || '#'}
	target="_blank"
	class="bg-slate-100 hover:bg-white text-gray-800 font-bold py-2 px-4 rounded-xl inline-flex items-center w-full"
>
	<img
		class="fill-current w-4 h-4 mr-2 aspect-[4/3]"
		src={hotmart_svg}
		loading="lazy"
		alt="hotmart icon"
	/>
	<!-- src="https://logosandtypes.com/wp-content/uploads/2023/02/hotmart.svg" -->
	<span>Download</span>
</a>
