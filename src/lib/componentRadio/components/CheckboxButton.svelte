<script>
	export let productName = '';
	export let isSelected = false;
	export let onToggle;

	function toggleSelection() {
		onToggle(productName, !isSelected);
	}
</script>

<label>
	<input type="checkbox" bind:checked={isSelected} on:change={toggleSelection} />
	{productName}
</label>
