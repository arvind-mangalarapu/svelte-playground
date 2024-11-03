<script>
	import { selectedComponentStore } from '$lib/stores/selectedComponentStore.js';
	import JsFunctions from '$lib/jsFunctions/JsFunctions.svelte';
	import PlainHtmlCss from '$lib/plainHtmlCss/PlainHtmlCss.svelte';
	import DefaultPage from '$lib/components/common/DefaultPage.svelte';
	import Button from '$lib/components/Button.svelte';
	import JsArrayMethods from '$lib/jsArrayMethods/JsArrayMethods.svelte';
	import Picker from '$lib/components/selectProduct/Picker.svelte';
	import IdCard from '$lib/components/IdCard.svelte';
	import RadioGroup from '$lib/components/RadioGroup.svelte';
	import CustomIconRadio from '$lib/components/CustomIconRadio..svelte';

	let selectedComponent = DefaultPage;
	let selectedProducts = [
		{ id: 1, name: 'Product 1' },
		{ id: 2, name: 'Product 2' },
		{ id: 3, name: 'Product 3' },
		{ id: 4, name: 'Product 4' }
	];
	const buttons = [
		{
			text: 'Default',
			kind: 'destructive',
			size: 'lg',
			classes: 'max-w-max bg-blue-500',
			component: 'DefaultPage'
		},
		{
			text: 'JS Array Methods',
			kind: 'primary',
			size: 'lg',
			classes: 'max-w-max',
			component: 'JsArrayMethods'
		},
		{
			text: 'JS Functions',
			kind: 'secondary',
			size: 'lg',
			classes: 'max-w-max bg-red-500',
			component: 'JsFunctions'
		},
		{
			text: 'Plain HTML/CSS',
			kind: 'tertiary',
			size: 'lg',
			classes: 'max-w-max bg-green-500',
			component: 'PlainHtmlCss'
		},
		{
			text: 'Picker',
			kind: 'destructive',
			size: 'lg',
			classes: 'max-w-max bg-blue-500',
			component: 'Picker'
		},
		{
			text: 'ID Card',
			kind: 'tertiary',
			size: 'lg',
			classes: 'max-w-max bg-green-500',
			component: 'IdCard'
		},
		{
			text: 'Custom Icon Radio',
			kind: 'secondary',
			size: 'lg',
			classes: 'max-w-max bg-red-500',
			component: 'CustomIconRadio'
		},
		{
			text: 'Radio Group forms',
			kind: 'destructive',
			size: 'lg',
			classes: 'max-w-max bg-blue-500',
			component: 'RadioGroup'
		}
	];

	const components = {
		JsArrayMethods: JsArrayMethods,
		JsFunctions: JsFunctions,
		PlainHtmlCss: PlainHtmlCss,
		Picker: Picker,
		IdCard: IdCard,
		RadioGroup: RadioGroup,
		CustomIconRadio: CustomIconRadio,
		DefaultPage: DefaultPage
	};
	// when value of store changes update selectedComponent
	selectedComponentStore.subscribe((value) => {
		selectedComponent = components[value] || DefaultPage;
	});
</script>

<nav class="flex bg-black gap-3 flex-wrap">
	{#each buttons as button}
		<Button
			text={button.text}
			kind={button.kind}
			size={button.size}
			classes={button.classes}
			on:click={() => selectedComponentStore.set(button.component)}
		/>
	{/each}
</nav>

{#if selectedComponent}
	<svelte:component this={selectedComponent} />
{:else}
	<p>Component not found.</p>
{/if}
