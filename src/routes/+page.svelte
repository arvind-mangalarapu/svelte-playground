<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
</script>

<ProductCard options="checkbox" />

<!-- <script>
	import ProductCard from '$lib/componentRadio/components/ProductCard.svelte';
	let products = [
		{ name: 'Product 1', isSelected: false },
		{ name: 'Product 2', isSelected: false },
		{ name: 'Product 3', isSelected: false }
	];
</script>

{#each products as product (product.name)}
	<ProductCard {product} />
{/each} -->
