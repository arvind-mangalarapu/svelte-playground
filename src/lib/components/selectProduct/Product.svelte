<script>
	export let productName;
	export let onRemove; // Prop to handle removal
</script>

<div class="flex gap-10 justify-between items-center border border-gray-300 p-3 mb-2 rounded">
	<h3 class="text-lg">{productName}</h3>
	<button on:click={onRemove} class="text-red-500 hover:text-red-700 transition duration-200">
		✖
	</button>
</div>
