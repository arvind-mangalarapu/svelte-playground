<script>
	import Checkbox from '$lib/components/selectProduct/Checkbox.svelte';
	import Product from '$lib/components/selectProduct/Product.svelte';

	const products = [
		'Product 1',
		'Product 2',
		'Product 3',
		'Product 4',
		'Product 5',
		'Product 6',
		'Product 7',
		'Product 8',
		'Product 9',
		'Product 10'
	];

	let selectedProducts = [];

	function toggleProduct(productName, isChecked) {
		if (isChecked) {
			selectedProducts = [...selectedProducts, productName];
		} else {
			selectedProducts = selectedProducts.filter((p) => p !== productName);
		}
	}

	function removeProduct(productName) {
		selectedProducts = selectedProducts.filter((p) => p !== productName);
		// Find the checkbox and uncheck it
		const checkbox = document.querySelector(`input[type="checkbox"][value="${productName}"]`);
		if (checkbox) {
			checkbox.checked = false;
		}
	}
</script>

<div class="p-4">
	<h2 class="text-xl font-bold mb-4">Selected Products</h2>
	<div class="flex gap-10 flex-wrap items-center justify-start">
		{#each selectedProducts as product}
			<Product productName={product} onRemove={() => removeProduct(product)} />
		{/each}
	</div>
	<h2 class="text-xl font-bold mb-4">Select Products</h2>
	<div class="mb-4">
		{#each products as product}
			<Checkbox
				label={product}
				onChange={(checked) => toggleProduct(product, checked)}
				checked={selectedProducts.includes(product)}
				value={product}
			/>
		{/each}
	</div>
</div>
