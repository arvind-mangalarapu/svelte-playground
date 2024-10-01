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

<label class="flex items-center mb-2">
	<input
		type="radio"
		{value}
		{name}
		checked={selectedValue === value}
		on:change={handleChange}
		class="mr-2"
	/>
	<span class="text-gray-700">{label}</span>
</label>
