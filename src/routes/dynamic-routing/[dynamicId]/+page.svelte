<script>
	export let data;
	const { products } = data;
</script>

<div class="bg-black text-white h-screen">
	<h1 class="text-3xl font-bold text-center mb-16 pt-16">Product</h1>
	{#each products as product}
		{#if product.id}
			<p>{product.id}</p>
			<p>{product.name}</p>
			<p>{product.description}</p>
		{/if}
	{/each}
</div>
