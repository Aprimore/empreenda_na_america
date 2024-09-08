<!-- Dropdown.svelte -->
<script>
	//@ts-nocheck
	export let languages;
	export let flagsMap;
	export let selected = '';
	export let onChange = () => {};

	const handleSelection = (code) => {
		selected = code;
		onChange(code);
	};
</script>

<div class="dropdown">
	<button
		class="flex items-center bg-[#f1f1f9] border-none p-3 rounded-md cursor-pointer"
		title="dropdown button"
	>
		<img src={flagsMap[selected]} alt="" class="w-6 h-4 mr-2" />
		{#if languages.find((option) => option.code === selected)}
			{languages.find((option) => option.code === selected).name}
		{/if}
	</button>
	<div class="dropdown-content rounded-md">
		{#each languages as { code, name }}
			<button
				class="flex items-center p-3 w-full text-left hover:bg-gray-200 border-none bg-transparent"
				title="country"
				on:click={() => handleSelection(code)}
			>
				<img src={flagsMap[code]} alt="" class="w-6 h-4 mr-2" />
				{name}
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
	/* .dropdown-button {
		display: flex;
		align-items: center;
		background: #f1f1f9;
		border: none;
		padding: 8px;
		border-radius: 4px;
		cursor: pointer;
	} */
	/* .flag-icon {
		width: 24px;
		height: 16px;
		margin-right: 8px;
	} */
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
	/* .dropdown-item {
		padding: 8px;
		cursor: pointer;
		display: flex;
		align-items: center;
		border: none;
		background: none;
		margin-left: auto;
		width: 100%;
		text-align: left;
	}
	.dropdown-item:hover {
		background-color: #ddd;
	} */
</style>
