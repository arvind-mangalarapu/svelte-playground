<script>
	import { onMount } from 'svelte';

	// Define form data variables
	let name = '';
	let email = '';

	// Function to save form data to localStorage
	function saveFormData() {
		const formData = {
			name,
			email
		};
		localStorage.setItem('formData', JSON.stringify(formData));
	}

	// Load form data from localStorage when component mounts
	onMount(() => {
		const savedData = localStorage.getItem('formData');
		if (savedData) {
			const { name: savedName, email: savedEmail } = JSON.parse(savedData);
			name = savedName || '';
			email = savedEmail || '';
		}
	});

	// Function to handle form submission
	function handleSubmit(event) {
		event.preventDefault(); // Prevent page reload
		saveFormData();
		alert('Form data saved to localStorage!');
	}
</script>

<!-- Form UI -->
<form on:submit|preventDefault={handleSubmit}>
	<label>
		Name:
		<input type="text" bind:value={name} />
	</label>
	<br />
	<label>
		Email:
		<input type="email" bind:value={email} />
	</label>
	<br />
	<button type="submit">Submit</button>
</form>
