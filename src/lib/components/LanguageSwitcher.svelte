<script lang="ts">
	import { t, locales, locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { brazil_svg, spain_svg, usa_svg } from '$lib';
	// import { onMount } from 'svelte';

	$: ({ route } = $page.data);

	const languages = [
		{ code: 'en', name: 'English', flag: usa_svg },
		{ code: 'es', name: 'Español', flag: spain_svg },
		{ code: 'pt', name: 'Português', flag: brazil_svg }
	];

	// Change the language and navigate to the correct route
	function handleLanguageChange(langCode: string) {
		const currentPath = route || '';
		goto(`/${langCode}${currentPath}`);
	}
</script>

<!-- Dropdown with flags and buttons -->
<div class="dropdown bg-emerald-100 rounded-md">
	<button
		class="flex items-center bg-[#f1f1f9] border-none p-3 rounded-md cursor-pointer"
		title="dropdown button"
	>
		<img src={languages.find((l) => l.code === $locale)?.flag} class="flag" alt="country flag" />
		{$t(`lang.${$locale}`)}
	</button>
	<div class="dropdown-content rounded-md">
		{#each languages as lang}
			<button on:click={() => handleLanguageChange(lang.code)}>
				<img src={lang.flag} alt="{lang.name} flag" class="flag" />
				<span>{lang.name}</span>
			</button>
		{/each}
	</div>
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
		z-index: 10;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: white;
		min-width: 140px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.dropdown-content button {
		width: 100%;
		color: black;
		padding: 12px 16px;
		background: none;
		border: none;
		text-align: left;
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.dropdown-content button:hover {
		background-color: #f1f1f1;
	}

	.flag {
		width: 20px;
		height: 20px;
		margin-right: 8px;
	}
</style>
