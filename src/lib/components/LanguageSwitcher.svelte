<script>
	import { goto } from '$app/navigation';
	import { currentLocale } from '$lib/store';
	import { locale } from '$lib/translations';

	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Español' },
		{ code: 'pt-br', name: 'Português' }
	];

	// Track the currently selected language
	$: selected = locale.get();

	const handleOnChange = (event) => {
		const newLocale = event.target.value;
		// Update the locale in stores
		currentLocale.set(newLocale);
		locale.set(newLocale);
		// Redirect to the new language path
		goto(`/${newLocale}`);
	};
</script>

<div class="language-buttons">
	<select
		class="relative h-[2.5rem] bg-[#F1F1F9] hover:bg-[#D4D4ED] rounded m-2 p-2 text-nowrap"
		bind:value={selected}
		on:change={handleOnChange}
	>
		{#each languages as language}
			<option value={language.code}>{language.name}</option>
		{/each}
	</select>
</div>
