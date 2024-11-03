<script lang="ts">
	export let options: [] = [
		{
			value: 1,
			icon: '👍',
			color: 'green'
		},
		{
			value: 2,
			icon: '👎',
			color: 'red'
		},
		{
			value: 3,
			icon: '😀',
			color: 'yellow'
		},
		{
			value: 4,
			icon: '👍',
			color: 'green'
		}
	];
	export let selectedOption: null = null;
</script>

<div class="flex space-x-4 bg-black h-screen w-screen items-center justify-center">
	{#each options as option (option.value)}
		<label
			class="flex items-center justify-center w-20 h-20 rounded-full cursor-pointer transition"
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
				<span class="text-white text-lg w-full h-full flex justify-center items-center"
					>{option.icon}</span
				>
			{/if}
		</label>
	{/each}
</div>
