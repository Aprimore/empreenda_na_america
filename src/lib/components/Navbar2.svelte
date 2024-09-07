<script>
	import { toptier_png } from '$lib';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	// export let data;
</script>

<nav
	class="bg-transparent block w-full px-6 py-3 mx-auto text-[#4A4A4A] shadow-xs bg-opacity-80 absolute top-0 left-0"
>
	<div class="flex items-center justify-between text-blue-gray-900 max-w-screen-lg mx-auto px-2">
		<a
			href="/"
			class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased"
		>
			<img src={toptier_png} class=" size-20" alt="" />
		</a>

		<!-- <button
			class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
			type="button"
			title="burger icon"
		>
			<span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					aria-hidden="true"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					></path>
				</svg>
			</span>
		</button> -->
		<LanguageSwitcher />
	</div>
</nav>

<style>
	/* * {
		border: black 1px solid;
	}
	a {
		font-size: large;
	} */
</style>
