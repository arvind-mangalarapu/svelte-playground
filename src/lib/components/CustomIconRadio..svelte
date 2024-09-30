<script>
	export let options = [];
	export let selectedOption = null;
</script>

<div class="flex space-x-4">
	{#each options as option (option.value)}
		<label
			class="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition"
			style="background-color: {selectedOption === option
				? option.color
				: 'transparent'}; border: 2px solid {selectedOption === option ? 'transparent' : 'gray'};"
		>
			<input
				type="radio"
				name="customRadio"
				value={option.value}
				bind:group={selectedOption}
				class="hidden"
				on:change={() => (selectedOption = option)}
			/>
			{#if selectedOption === option}
				<span class="text-white text-lg">{option.icon}</span>
			{/if}
		</label>
	{/each}
</div>
