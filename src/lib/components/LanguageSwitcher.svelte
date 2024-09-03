<script>
	import { goto } from '$app/navigation';
	import { currentLocale } from '$lib/store';
	import { locale } from '$lib/translations';
	import { onMount } from 'svelte';

	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Español' },
		{ code: 'pt-br', name: 'Português' }
	];

	// Initialize selected with a default value
	let selected = '';

	// Function to update the selected value
	function updateValue() {
		currentLocale.subscribe((value) => {
			selected = value;
		});
	}

	// Call updateValue once the component is mounted
	onMount(() => {
		updateValue();
	});

	const handleOnChange = (event) => {
		const newLocale = event.target.value;
		currentLocale.set(newLocale);
		locale.set(newLocale);
		updateValue()
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
