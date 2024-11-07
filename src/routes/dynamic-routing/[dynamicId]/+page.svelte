<script>
	export let data;
	const { product } = data;
</script>

<div class="bg-black text-white h-screen text-center">
	<h1 class="text-3xl font-bold text-center mb-16 pt-16">Product</h1>

	{#if product}
		<p class="text-lg">ID: {product.id}</p>
		<p class="text-xl font-semibold">Name: {product.name}</p>
		<p class="mt-4">Description: {product.description}</p>

		<p>{product.variations.map((variation) => variation.name).join(', ')}</p>
	{:else}
		<p class="text-red-500 text-center">No product information available.</p>
	{/if}
</div>
