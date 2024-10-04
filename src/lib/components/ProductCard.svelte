<script lang="ts">
	import Checkbox from '$lib/components/selectProduct/Checkbox.svelte';
	import RadioButton from '$lib/components/selectProduct/RadioButton.svelte';
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

	export let options: 'checkbox' | 'radio';

	let selectedProducts: string[] = []; // Checkbox selections
	let selectedRadioProduct: string | null = null; // Radio selection

	// Combine checkbox and radio selections
	$: combinedSelectedProducts = [...selectedProducts, selectedRadioProduct].filter(Boolean);

	// Remove product from selected list
	function removeProduct(product: string) {
		selectedProducts = selectedProducts.filter((p) => p !== product);
		if (selectedRadioProduct === product) selectedRadioProduct = null;
	}
</script>

<div class="p-4 space-y-4">
	<h2 class="text-xl font-bold">Selected Products</h2>

	{#if combinedSelectedProducts.length > 0}
		<div class={selectedRadioProduct ? 'w-full' : 'flex flex-wrap gap-2'}>
			{#each combinedSelectedProducts as product}
				<div class={selectedRadioProduct === product ? 'w-full mb-4' : 'flex-initial'}>
					<Product productName={product} onRemove={() => removeProduct(product)} />
				</div>
			{/each}
		</div>
	{:else}
		<p class="text-gray-500">No products selected</p>
	{/if}

	{#if options === 'checkbox'}
		<h2 class="text-xl font-bold">Select Products (Checkbox)</h2>
		<div>
			{#each products as product}
				<Checkbox
					label={product}
					checked={selectedProducts.includes(product)}
					onChange={(checked) => {
						selectedProducts = checked
							? [...selectedProducts, product]
							: selectedProducts.filter((p) => p !== product);
					}}
				/>
			{/each}
		</div>
	{:else if options === 'radio'}
		<h2 class="text-xl font-bold">Select a Product (Radio)</h2>
		<div>
			{#each products as product}
				<RadioButton
					label={product}
					name="product"
					selectedValue={selectedRadioProduct}
					onChange={() => (selectedRadioProduct = product)}
				/>
			{/each}
		</div>
	{/if}
</div>
