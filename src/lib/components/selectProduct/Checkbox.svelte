<script>
	export let label;
	export let checked = false;
	export let onChange;
	export let value;

	function handleChange(event) {
		onChange(event.target.checked);
	}
</script>

<label class="flex items-center mb-2 text-white">
	<input type="checkbox" bind:checked {value} on:change={handleChange} class="mr-2" />
	<span class="text-gray-300">{label}</span>
</label>
