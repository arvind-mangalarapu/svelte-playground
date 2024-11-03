<!-- Picker.svelte -->
<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import Product from '$lib/components/selectProduct/Product.svelte';

	// The updated products array will have objects with { id, name }
	export let products: { id: number; name: string }[] = [
		{
			id: 1,
			name: 'Product 1'
		},
		{
			id: 2,
			name: 'Product 2'
		},
		{
			id: 3,
			name: 'Product 3'
		},
		{
			id: 4,
			name: 'Product 4'
		}
	]; // Accept products array as a prop
	export let options: 'checkbox' | 'radio' = 'checkbox'; // Option to toggle between checkbox and radio

	// Selected products for checkbox (store ids of selected products)
	let selectedProducts: number[] = [];

	// Selected product for radio (store id of the selected product)
	let selectedRadioProduct: number | null = null;

	// Combine checkbox and radio selections into a single array
	$: combinedSelectedProducts = [...selectedProducts, selectedRadioProduct].filter(Boolean); // Filter out any null values

	// Remove a product from the selected list
	const removeProduct = (productId: number) => {
		// Remove from checkbox selection if it exists
		selectedProducts = selectedProducts.filter((id) => id !== productId);

		// If the removed product is the selected radio product, clear it
		if (selectedRadioProduct === productId) selectedRadioProduct = null;
	};

	// Get product name by id for display
	const getProductName = (productId: number) => {
		const product = products.find((p) => p.id === productId);
		return product ? product.name : '';
	};
</script>

<div class="picker-containe text-white bg-black h-screen w-screen">
	<h2 class="text-xl font-bold">Selected Products</h2>

	{#if combinedSelectedProducts.length > 0}
		<div class={selectedRadioProduct ? 'w-full' : 'flex flex-wrap gap-2'}>
			{#each combinedSelectedProducts as productId}
				<Product
					productName={getProductName(productId)}
					onRemove={() => removeProduct(productId)}
				/>
			{/each}
		</div>
	{:else}
		<p class="text-gray-500">No products selected</p>
	{/if}

	<!-- Pass the products, options, and bind selected products to the ProductCard component -->
	<ProductCard {products} {options} bind:selectedProducts bind:selectedRadioProduct />
</div>
