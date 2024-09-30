<script>
	export let label;
	export let checked = false;
	export let onChange;
	export let value;

	function handleChange(event) {
		onChange(event.target.checked);
	}
</script>

<label class="flex items-center mb-2">
	<input type="checkbox" bind:checked {value} on:change={handleChange} class="mr-2" />
	<span class="text-gray-700">{label}</span>
</label>
