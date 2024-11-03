<script>
	export let label;
	export let name;
	export let value;
	export let selectedValue;
	export let onChange;

	function handleChange(event) {
		onChange(event.target.value);
	}
</script>

<label class="flex items-center mb-2 text-white">
	<input
		type="radio"
		{value}
		{name}
		checked={selectedValue === value}
		on:change={handleChange}
		class="mr-2 text-white"
	/>
	<span class="text-gray-300">{label}</span>
</label>
