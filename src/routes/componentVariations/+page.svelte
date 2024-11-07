<script>
	export let data;

	const { products } = data;
</script>

<div class="flex flex-col gap-20 bg-black h-screen items-center">
	<button on:click={() => window.history.back()} class="text-white">back</button>
	<div class="flex flex-wrap items-center justify-center gap-5">
		{#each products as { title, description, src, alt, theme, type }}
			<svelte:component this={type} {title} {description} {src} {alt} {theme} />
		{/each}
	</div>
</div>
