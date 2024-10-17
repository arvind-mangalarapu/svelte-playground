<script lang="ts">
	import Picker from './selectProduct/Picker.svelte';
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






<!-- picker svelte -->


<script>
	import '../../css/picker.css';
	import Search from '../input/Search.svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import Checkbox from '../input/Checkbox.svelte';
	import ProductSelected from './ProductSelected.svelte';
	import ProductCard from './ProductCard.svelte';
	// import ProductCardRadio from './ProductCardRadio.svelte';
	export let productName;

	let selectedProducts = [];

	console.log('selectedProducts', selectedProducts);

	// let selectedRadio = '';

	let productData = [
		{ id: 1, name: 'Product 1', value: 1 },
		{ id: 2, name: 'Product 2', value: 2 },
		{ id: 3, name: 'Product 3', value: 3 },
		{ id: 4, name: 'Product 4', value: 4 },
		{ id: 5, name: 'Product 5', value: 5 },
		{ id: 6, name: 'Product 6', value: 6 },
		{ id: 7, name: 'Product 7', value: 7 },
		{ id: 8, name: 'Product 8', value: 8 },
		{ id: 9, name: 'Product 9', value: 9 },
		{ id: 10, name: 'Product 10', value: 10 },
		{ id: 11, name: 'Product 11', value: 11 },
		{ id: 12, name: 'Product 12', value: 12 },
		{ id: 13, name: 'Product 13', value: 13 }
	];

	// function toggleProduct(productName, isChecked) {
	// 	if (isChecked) {
	// 		selectedProducts = [...selectedProducts, productName];
	// 	} else {
	// 		selectedProducts = selectedProducts.filter((p) => p !== productName);
	// 	}
	// }

	// function removeProduct(productName) {
	// 	selectedProducts = selectedProducts.filter((p) => p !== productName);
	// }
</script>

<main class="mx-auto mt-[28px] max-w-[744px]">
	<h4 class="text-600 font-medium leading-600 brk-text-default">Title</h4>
	<div class="mt-[28px] flex gap-3x">
		<Search placeholder="Search by text" name="search" id="search" value="" classes="w-full" />
		<Button text="New Item" kind="secondary" size="lg" classes="w-[138px]">
			<Icon component="plus" slot="leadingIcon" />
		</Button>
	</div>
	<div class=" flex gap-3x">
		{#each selectedProducts as product}
			<ProductSelected productName={product.name} />
		{/each}
	</div>
	<div
		class="custom-scrollbar mt-[28px] flex h-[260px] flex-wrap items-start justify-start gap-3x overflow-y-scroll"
	>
		{#each productData as { id, name, value }}
			<!-- <ProductCard
				options="radio"
				productName={product.name}
				label={product}
				onChange={(checked) => toggleProduct(product, checked)}
				checked={selectedProducts.includes(product)}
				value={product}
			/> -->

			<ProductCard options="checkbox" productName={name} {value} bind:checked={selectedProducts} />
		{/each}

		<!-- {#each productData as product}
			<ProductCardRadio productName={product.name} label={product} value={product} />
		{/each} -->
	</div>

	<div class="mt-[28px] flex items-center gap-3x">
		<Checkbox name={productName} id="checkbox" value="checkbox" />
		<label for="checkbox">{productName}</label>
	</div>

	<div class="mt-[28px] flex justify-end gap-3x">
		<Button text="Cancel" kind="tertiary" size="lg" classes="w-[124px]"></Button>
		<Button text="Save" kind="primary" size="lg" classes="w-[124px]"></Button>
	</div>
</main>

<style lang="postcss">
	/* for firefox  */

	:global(.custom-scrollbar) {
		scrollbar-width: 4px;
		scrollbar-color: #adb2c9;
	}
	/* for global */
	:global(.custom-scrollbar::-webkit-scrollbar) {
		width: 4px;
	}

	:global(.custom-scrollbar::-webkit-scrollbar-track) {
		background: #f8f8fa;
		border-radius: 100px;
	}

	:global(.custom-scrollbar::-webkit-scrollbar-thumb) {
		background: #adb2c9;
		border-radius: 100px;
	}

	:global(.custom-scrollbar::-webkit-scrollbar-thumb:hover) {
		background: #adb2c9;
	}
</style>




<!-- product card     -->


<script lang="ts">
	import Icon from '../common/Icon.svelte';
	// import Radio from '../input/Radio.svelte';
	// import Checkbox from '../input/Checkbox.svelte';

	// export let onChange = '',
	// 	productName = '',
	// 	productId = '',
	// 	value = '',
	// 	classes: string = '',
	// 	checked = false,
	// 	selectedProductId: string | number,
	// 	options: 'checkBox' | 'radio';

	// function handleChange(event) {
	// 	onChange(event.target.checked);
	// }

	// function handleChangeRadio(event) {
	// 	onChange(event.target.value);
	// }
	export let productName,
		options: 'checkbox' | 'radio',
		classes: string = '',
		label: string = '',
		checked: boolean = false,
		value: string | number;

	// value: string | number = '',
	// checked: boolean = false,
	// label: string = '',
	// group;

	// export let id: string | number,
	// 	name: string = '',
	// 	group: string | number, // Group for radio selection
	// 	value: string | number = '', // Value for the radio option
	// 	options: 'checkbox' | 'radio' = 'checkbox', // Determines whether to use radio or checkbox
	// 	checked: boolean = false,
	// 	productName: string = '',
	// 	classes: string = '';
</script>

<main>
	{#if options === 'checkbox'}
		<div
			class="w-[232px] rounded-600 border-[1px] border-brk-border-default bg-brk-bg-neutral-default {classes}"
		>
			<div class="flex items-center gap-2x py-3x pl-3x pr-4x">
				<div class="flex w-full items-center gap-3x">
					<Icon component="check" classes="h-[32px] w-[32px]" --color="#956F00" />
					<p>{productName}</p>
				</div>
				<!-- <Checkbox
					name={productName}
					id={productId}
					classes="h-[24px] w-[24px]"
					value={productId}
					bind:checked
					on:change={handleChange}
				/> -->
				<!-- <Checkbox {id} {name} {value} bind:checked /> -->
				<label for={productName} class="mb-2 flex items-center">
					<input type="checkbox" bind:checked {value} class="mr-2" />
					<span class="text-gray-700">{label}</span>
				</label>
			</div>
		</div>
		<!-- {:else if options === 'radio'}
		<div
			class="border mb-3x flex w-full items-center justify-between gap-3x space-x-2x rounded-600 border-100 px-4x py-3x brk-bg-neutral-default brk-border-default {classes}"
		>
			<span>{productName}</span> -->
		<!-- <Radio
					name="product"
					id={'radio-' + productId}
					{classes}
					{value}
					bind:group={selectedProductId}
					on:change={handleChangeRadio}
				/> -->
		<!-- <Radio {id} name="radio" {value} bind:group /> -->
		<!-- </div> -->
	{/if}
</main>




<!-- page .svelte -->


<!-- <script lang="ts">
	import ProductCard from './../lib/components/common/ProductCard.svelte';
	import ImageCard from '$lib/components/common/ImageCard.svelte';

	// Initialize selectedValue as an array for checkbox selections
	let group = [];

	let images = [
		{
			id: '1',
			name: 'group1',
			imageCard: '/images/image-card.png',
			alt: 'Image 1',
			value: '1',
			options: 'checkbox'
		},
		{
			id: '2',
			name: 'group1',
			imageCard: '/images/image-card.png',
			alt: 'Image 2',
			value: '2',
			options: 'checkbox'
		},
		{
			id: '3',
			name: 'group1',
			imageCard: '/images/image-card.png',
			alt: 'Image 3',
			value: '3',
			options: 'checkbox'
		},
		{
			id: '4',
			name: 'group1',
			imageCard: '/images/image-card.png',
			alt: 'Image 4',
			value: '4',
			options: 'checkbox'
		},
		{
			id: '5',
			name: 'group1',
			imageCard: '/images/image-card.png',
			alt: 'Image 5',
			value: '5',
			options: 'checkbox'
		}
	];

	$: console.log('Selected values', group);
</script>

<div class="mt-[100px] flex flex-wrap justify-center gap-10x">
	{#each images as { id, name, imageCard, alt, value, options }}
		<ImageCard {imageCard} {alt} {id} {name} bind:group {value} options="radio" />
	{/each}
</div> -->

<script>
	import Picker from '$lib/components/common/Picker.svelte';
	import Modal from '$lib/components/common/Modal.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import ProductCard from '$lib/components/common/ProductCard.svelte';
	import ProductSelected from '$lib/components/common/ProductSelected.svelte';

	let showModal = false;
	let selectedProductId = '';

	$: console.log('Selected product', selectedProductId);

	let selectedProduct = [];

	$: console.log('Selected product', selectedProduct.join(', '));

	let group = [
		{ id: 1, name: 'Product 1', value: 1 },
		{ id: 2, name: 'Product 2', value: 2 },
		{ id: 3, name: 'Product 3', value: 3 },
		{ id: 4, name: 'Product 4', value: 4 },
		{ id: 5, name: 'Product 5', value: 5 },
		{ id: 6, name: 'Product 6', value: 6 },
		{ id: 7, name: 'Product 7', value: 7 },
		{ id: 8, name: 'Product 8', value: 8 },
		{ id: 9, name: 'Product 9', value: 9 },
		{ id: 10, name: 'Product 10', value: 10 },
		{ id: 11, name: 'Product 11', value: 11 },
		{ id: 12, name: 'Product 12', value: 12 },
		{ id: 13, name: 'Product 13', value: 13 }
	];
</script>

<Modal bind:showModal classes="bg-[#000000]">
	<Picker>
		<!-- {#each group as { id, name, value }} 
			<div class=" flex gap-3x">
				<ProductSelected />
			</div>
			<div
				class="custom-scrollbar mt-[28px] flex h-[260px] flex-wrap items-start justify-start gap-3x overflow-y-scroll"
			>
				<ProductCard productName={name} productId={id} {value} {id} {name} options="checkbox" />
			</div>
		{/each} -->
		<div class="flex flex-wrap gap-3x" slot="selected">
			{#each selectedProduct as product}
				<ProductSelected productName={product.name} />
			{/each}
		</div>
		<div class="flex flex-wrap gap-3x" slot="items">
			{#each group as { id, name, value }}
				<ProductCard
					bind:group
					productName={name}
					productId={id}
					{value}
					{id}
					{name}
					options="checkbox"
					classes="w-[232px] rounded-600 border-[1px] border-brk-border-default bg-brk-bg-neutral-default"
				/>
			{/each}
		</div>
	</Picker>
</Modal>
<Button text="open modal" kind="primary" size="sm" on:click={() => (showModal = true)}></Button>



<!-- Picker -->
<script lang="ts">
	import '../../css/picker.css';
	import Search from '../input/Search.svelte';
	import Button from './Button.svelte';
	import Icon from './Icon.svelte';
	import Checkbox from '../input/Checkbox.svelte';
	import ProductSelected from './ProductSelected.svelte';
	import ProductCard from './ProductCard.svelte';
	// import ProductCardRadio from './ProductCardRadio.svelte';
	export let productName = '',
		// group = [],
		productData = [],
		options: 'checkbox' | 'radio',
		selectedProducts: any[] | '' = '';

	$: console.log('selectedProducts', selectedProducts);

	function removeProduct(id) {
		selectedProducts = selectedProducts.filter((product) => product !== id);
	}
</script>

<main class="mx-auto mt-[28px] max-w-[744px]">
	<h4 class="text-600 font-medium leading-600 brk-text-default">Title</h4>
	<div class="mt-[28px] flex gap-3x">
		<Search placeholder="Search by text" name="search" id="search" value="" classes="w-full" />
		<Button text="New Item" kind="secondary" size="lg" classes="w-[138px]">
			<Icon component="plus" slot="leadingIcon" />
		</Button>
	</div>
	<div class=" flex gap-3x">
		{#if typeof selectedProducts === Array}
			{#each selectedProducts as product}
				<ProductSelected productName={product} remove={() => removeProduct(product)} />
			{/each}
		{:else}
			<ProductSelected
				productName={selectedProducts}
				remove={() => removeProduct(selectedProducts)}
			/>
		{/if}
	</div>
	<div
		class="custom-scrollbar mt-[28px] flex h-[260px] flex-wrap items-start justify-start gap-3x overflow-y-scroll"
	>
		{#each productData as { id, name, value }}
			<ProductCard
				{options}
				productName={name}
				value={name}
				bind:group={selectedProducts}
				checked={selectedProducts.includes(name)}
				{id}
			/>
		{/each}
	</div>

	<!-- <div class="mt-[28px] flex items-center gap-3x">
		<Checkbox name={productName} id="checkbox" value="checkbox" bind:group=[] />
		<label for="checkbox">{productName}</label>
	</div> -->

	<div class="mt-[28px] flex justify-end gap-3x">
		<Button text="Cancel" kind="tertiary" size="lg" classes="w-[124px]"></Button>
		<Button text="Save" kind="primary" size="lg" classes="w-[124px]"></Button>
	</div>
</main>

<style lang="postcss">
	/* for firefox  */

	:global(.custom-scrollbar) {
		scrollbar-width: 4px;
		scrollbar-color: #adb2c9;
	}
	/* for global */
	:global(.custom-scrollbar::-webkit-scrollbar) {
		width: 4px;
	}

	:global(.custom-scrollbar::-webkit-scrollbar-track) {
		background: #f8f8fa;
		border-radius: 100px;
	}

	:global(.custom-scrollbar::-webkit-scrollbar-thumb) {
		background: #adb2c9;
		border-radius: 100px;
	}

	:global(.custom-scrollbar::-webkit-scrollbar-thumb:hover) {
		background: #adb2c9;
	}
</style>
