<script lang="ts">
	export let options = [];
	export let selectedValue; // The currently selected radio value
	export let name = 'radio-group'; // Name attribute for radio group
	export let label = ''; // Label for the radio group
	export let classes = {
		div: '',
		input: '',
		label: ''
	};

	const handleChange = (value) => {
		selectedValue = value;
		// Dispatch event to the parent component
		dispatch('change', { value });
	};

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="mb-4 {classes.div}">
	{#if label}
		<label class="block text-lg font-medium mb-2 {classes.label}">{label}</label>
	{/if}
	{#each options as option (option.value)}
		<div class="flex items-center mb-2">
			<input
				type="radio"
				{name}
				id={option.value}
				value={option.value}
				bind:group={selectedValue}
				on:change={() => handleChange(option.value)}
				class="form-radio text-blue-500 h-4 w-4 mr-2 {classes.input}"
			/>
			<label for={option.value} class="text-gray-700">{option.label}</label>
		</div>
	{/each}
</div>
