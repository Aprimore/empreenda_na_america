<script lang="ts">
	import { t, locales, locale } from '$lib/translations';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { brazil_svg, spain_svg, usa_svg } from '$lib';

	const languages = [
		// { code: 'en', name: 'English', flag: usa_svg },
		{ code: 'es', name: 'Español', flag: spain_svg },
		{ code: 'pt', name: 'Português', flag: brazil_svg }
	];

	// Update the <html lang> attribute
	function updateHtmlLang(langCode: string) {
		document.documentElement.lang = langCode;
	}

	function handleLanguageChange(langCode: string) {
		const currentPath = $page.data.route || '';
		updateHtmlLang(langCode);
		goto(`/${langCode}${currentPath}`);
	}

	function getHreflangUrl(langCode: string): string {
		const currentPath = $page.data.route || '';
		return `/${langCode}${currentPath}`;
	}
</script>

{#each languages as lang}
	<link rel="alternate" hreflang={lang.code} href={getHreflangUrl(lang.code)} />
{/each}

<div class="dropdown bg-emerald-100 rounded-md">
	<button
		class="flex items-center bg-[#f1f1f9] border-none p-3 rounded-md cursor-pointer"
		title="dropdown button"
	>
		<img
			width="16"
			height="16"
			src={languages.find((l) => l.code === $locale)?.flag}
			class="flag"
			alt="country flag"
		/>
		{$t(`lang.${$locale}`)}
	</button>
	<div class="dropdown-content rounded-md">
		{#each languages as lang}
			<button on:click={() => handleLanguageChange(lang.code)}>
				<img width="16" height="16" src={lang.flag} alt="{lang.name} flag" class="flag" />
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
