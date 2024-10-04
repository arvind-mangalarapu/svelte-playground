<script>
	export let productName = '';
	export let isSelected = false;
</script>

<div>
	<p>{productName}</p>
	<p>Status: {isSelected ? 'Selected' : 'Not Selected'}</p>
</div>
