<!-- MainPage.svelte -->
<script lang="ts">
	import Picker from '$lib/components/selectProduct/Picker.svelte';

	const products = [
		{ id: 1, name: 'Product 1' },
		{ id: 2, name: 'Product 2' },
		{ id: 3, name: 'Product 3' },
		{ id: 4, name: 'Product 4' },
		{ id: 5, name: 'Product 5' },
		{ id: 6, name: 'Product 6' },
		{ id: 7, name: 'Product 7' },
		{ id: 8, name: 'Product 8' },
		{ id: 9, name: 'Product 9' },
		{ id: 10, name: 'Product 10' }
	];

	let options: 'checkbox' | 'radio' = 'checkbox'; // Default option
</script>

<Picker {products} {options} />
