<script lang="ts">
	export let selectedValue: [],
		value: string,
		group ];
</script>

{#if selectedValue}
	<h1>Selected value is - {selectedValue}</h1>
{/if}

<label>
	<input type="checkbox" {value} bind:group={selectedValue} />
	<p>{value}</p>
</label>
