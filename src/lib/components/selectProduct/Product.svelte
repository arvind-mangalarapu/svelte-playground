<script lang="ts">
	// Export props with type annotations
	export let productName: string;
	export let onRemove: () => void; // Type for the onRemove function
</script>

<!-- Styling and structure for the selected product -->
<div class="flex gap-10 justify-between items-center border border-gray-300 p-3 mb-2 rounded">
	<h3 class="text-lg">{productName}</h3>
	<!-- Remove button -->
	<button on:click={onRemove} class="text-red-500 hover:text-red-700 transition duration-200">
		✖
	</button>
</div>

<style>
	/* Add any additional styling here if needed */
</style>
