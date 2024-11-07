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
	import ThemeSwitch from '$lib/components/themeSwitch/ThemeSwitch.svelte';
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
			classes: 'max-w-max bg-[#FF77B7]',
			component: 'DefaultPage'
		},
		{
			text: 'JS Array Methods',
			kind: 'primary',
			size: 'lg',
			classes: 'max-w-max bg-[#C5D3E8]',
			component: 'JsArrayMethods'
		},
		{
			text: 'JS Functions',
			kind: 'secondary',
			size: 'lg',
			classes: 'max-w-max bg-[#D4F6FF]',
			component: 'JsFunctions'
		},
		{
			text: 'Plain HTML/CSS',
			kind: 'tertiary',
			size: 'lg',
			classes: 'max-w-max bg-[#D0E8C5]',
			component: 'PlainHtmlCss'
		},
		{
			text: 'Picker',
			kind: 'destructive',
			size: 'lg',
			classes: 'max-w-max bg-[#C5D3E8]',
			component: 'Picker'
		},
		{
			text: 'ID Card',
			kind: 'tertiary',
			size: 'lg',
			classes: 'max-w-max bg-[#FAB12F]',
			component: 'IdCard'
		},
		{
			text: 'Custom Icon Radio',
			kind: 'secondary',
			size: 'lg',
			classes: 'max-w-max bg-[#FA4032]',
			component: 'CustomIconRadio'
		},
		{
			text: 'Radio Group forms',
			kind: 'destructive',
			size: 'lg',
			classes: 'max-w-max bg-[#F09319]',
			component: 'RadioGroup'
		},
		{
			text: 'Theme Switch',
			kind: 'secondary',
			size: 'lg',
			classes: 'max-w-max bg-[#FFE31A]',
			component: 'ThemeSwitch'
		},
		{
			text: 'Dynamic Routing',
			kind: 'secondary',
			size: 'lg',
			classes: 'max-w-max bg-[#ABBA7C] p-2 rounded-xl border',
			component: '',
			href: '/dynamic-routing'
		},
		{
			text: 'Component Variations',
			kind: 'secondary',
			size: 'lg',
			classes: 'max-w-max bg-[#3e5972] p-2 rounded-xl border',
			component: '',
			href: '/componentVariations'
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
		ThemeSwitch: ThemeSwitch,
		DefaultPage: DefaultPage
	};
	// when value of store changes update selectedComponent
	selectedComponentStore.subscribe((value) => {
		selectedComponent = components[value] || DefaultPage;
	});
</script>

<nav class="flex bg-black gap-3 flex-wrap">
	{#each buttons as button}
		{#if button.href}
			<a class={button.classes} href={button.href}>{button.text}</a>
		{:else}
			<Button
				text={button.text}
				kind={button.kind}
				size={button.size}
				classes={button.classes}
				on:click={() => selectedComponentStore.set(button.component)}
			/>
		{/if}
	{/each}
</nav>

{#if selectedComponent}
	<svelte:component this={selectedComponent} />
{:else}
	<p>Component not found.</p>
{/if}
