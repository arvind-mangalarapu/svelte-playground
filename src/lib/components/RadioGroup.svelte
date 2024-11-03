<!-- components/RadioGroup.svelte -->
<script lang="ts">
	import CustomRadioButton from './CustomRadioButton.svelte';
	import ContactForm from './radioForms/ContactForm.svelte';
	import RegistrationForm from './radioForms/RegistrationForm.svelte';
	import FeedbackForm from './radioForms/FeedbackForm.svelte';
	import SurveyForm from './radioForms/SurveyForm.svelte';

	export let selectedForm = '',
		status: 'default' | 'selected' | 'completed' | 'incomplete';

	const forms = [
		{ value: 'contact', label: 'Contact Us', component: ContactForm },
		{ value: 'register', label: 'Register', component: RegistrationForm },
		{ value: 'feedback', label: 'Feedback', component: FeedbackForm },
		{ value: 'survey', label: 'Survey', component: SurveyForm }
	];
</script>

<div class="h-screen w-screen bg-black">
	<h2 class="text-xl font-bold text-white mb-4 text-center">Select a Form</h2>
	<div class="p-4 bg-gray-600 flex justify-center items-center gap-4">
		<!-- <CustomRadioButton
			selectedValue={selectedForm}
			options={forms}
			name="formSelector"
			on:change={(e) => (selectedForm = e.detail.value)}
			classes="text-white focus:ring-blue-500 border-gray-300"
		/> -->
		{#each forms as form}
			<div class="mb-2 flex justify-center items-center gap-2">
				<label for={form.value} class="text-white ml-2">{form.label}</label>

				<input
					type="radio"
					id={form.value}
					name="formSelector"
					value={form.value}
					bind:group={selectedForm}
					class="text-white focus:ring-blue-500 border-gray-300"
				/>
			</div>
		{/each}
	</div>

	{#if selectedForm}
		<svelte:component this={forms.find((f) => f.value === selectedForm).component} />
	{/if}
</div>
