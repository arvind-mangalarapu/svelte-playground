<script>
	export let data;

	const { products } = data;
</script>

<div class="bg-black text-white h-screen">
	<h1 class="text-3xl font-bold text-center mb-16 pt-16">Products</h1>
	<div class="container flex items-center justify-evenly">
		{#each products as product}
			<a href={`/dynamic-routing/${product.id}`}>{product.name}</a>
		{/each}
	</div>
</div>
