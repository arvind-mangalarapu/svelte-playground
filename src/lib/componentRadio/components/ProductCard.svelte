<script>
	import CheckboxButton from './CheckboxButton.svelte';
	import Product from './ Product.svelte';

	export let product = { name: '', isSelected: false };

	function toggleSelection(name, isSelected) {
		product.isSelected = isSelected;
	}
</script>

<div>
	<CheckboxButton
		productName={product.name}
		isSelected={product.isSelected}
		onToggle={toggleSelection}
	/>
	<Product productName={product.name} isSelected={product.isSelected} />
</div>
