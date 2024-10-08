<!-- ProductCard.svelte -->
<script lang="ts">
	import Checkbox from '$lib/components/selectProduct/Checkbox.svelte';
	import RadioButton from '$lib/components/selectProduct/RadioButton.svelte';

	export let products: { id: number; name: string }[]; // Accept products array with id and name
	export let options: 'checkbox' | 'radio'; // Accept selection type
	export let selectedProducts: number[]; // Selected product IDs for checkbox
	export let selectedRadioProduct: number | null; // Selected product ID for radio

	const toggleCheckbox = (productId: number) => {
		if (selectedProducts.includes(productId)) {
			selectedProducts = selectedProducts.filter((id) => id !== productId); // Remove if already selected
		} else {
			selectedProducts = [...selectedProducts, productId]; // Add if not selected
		}
	};

	const selectRadioProduct = (productId: number) => {
		selectedRadioProduct = productId; // Set selected radio product
	};
</script>

<div class="p-4 space-y-4">
	<!-- Toggle between Checkbox and Radio options -->
	<button
		on:click={() => (options = options === 'checkbox' ? 'radio' : 'checkbox')}
		class="text-gray-500 border border-gray-500 hover:text-gray-700 hover:border-gray-700 px-4 py-2 rounded transition duration-200"
	>
		Toggle
	</button>

	{#if options === 'checkbox'}
		<h2 class="text-xl font-bold">Select Products (Checkbox)</h2>
		<div>
			{#each products as product}
				<Checkbox
					value={product.id}
					label={product.name}
					name={product.name}
					checked={selectedProducts.includes(product.id)}
					onChange={() => toggleCheckbox(product.id)}
				/>
			{/each}
		</div>
	{:else if options === 'radio'}
		<h2 class="text-xl font-bold">Select a Product (Radio)</h2>
		<div>
			{#each products as product}
				<RadioButton
					value={product.id}
					label={product.name}
					name="product"
					selectedValue={selectedRadioProduct}
					onChange={() => selectRadioProduct(product.id)}
				/>
			{/each}
		</div>
	{/if}
</div>

<style>
	/* Add any necessary styles here */
</style>
