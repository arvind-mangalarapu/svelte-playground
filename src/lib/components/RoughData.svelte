<script lang="ts">
	import Icon from '../common/Icon.svelte';
	import Radio from '../input/Radio.svelte';
	import Checkbox from '../input/Checkbox.svelte';

	// Define the props with their types
	export let label: string,
		productName: string,
		productId: string | number,
		selectedValue: string | number,
		onChange: (value: string | boolean) => void,
		options: 'radio' | 'checkBox';

	// Handle the change event for radio buttons
	const handleChange = (event: Event) => {
		const target = event.target as HTMLInputElement; // Cast to HTMLInputElement for better type inference
		onChange(target.value);
	};

	// Handle the change event for checkboxes (uncomment if needed)
	const handleChangeCheckbox = (event: Event) => {
		const target = event.target as HTMLInputElement; // Cast to HTMLInputElement
		onChange(target.checked);
	};
</script>

<!-- Checkbox implementation (uncomment if needed) -->

{#if options === 'checkBox'}
	<div
		class="w-[232px] rounded-600 border-[1px] border-brk-border-default bg-brk-bg-neutral-default"
	>
		<div class="flex items-center gap-2x py-3x pl-3x pr-4x">
			<div class="flex w-full items-center gap-3x">
				<Icon component="placeholder" classes="h-[32px] w-[32px]" --color="#956F00" />
				<p>{productName}</p>
			</div>
			<label for={productId}>
				<Checkbox
					value={productId}
					name={productName}
					id={productId}
					classes="h-[24px] w-[24px]"
					bind:checked={selectedValue}
					on:change={handleChangeCheckbox}
				/>
			</label>
		</div>
	</div>
{/if}

{#if options === 'radio'}
	<div
		class="border mb-3x w-full gap-3x space-x-2x rounded-600 border-100 px-4x py-3x brk-bg-neutral-default brk-border-default"
	>
		<label for={productId} class="mb-2 flex items-center">
			<Radio
				id={productId}
				value={productName}
				name={productName}
				bind:group={selectedValue}
				on:change={handleChange}
			/>
			<span class="text-gray-700">{productName}</span>
		</label>
	</div>
{/if}
