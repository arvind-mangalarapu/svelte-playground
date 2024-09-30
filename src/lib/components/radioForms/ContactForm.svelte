<!-- components/radioForms/ContactForm.svelte -->
<script>
	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="p-4 bg-gray-700 rounded-lg">
	<h2 class="text-lg font-bold text-white mb-2">Contact Us</h2>
	<div class="mb-4">
		<label for="name" class="text-white">Name:</label>
		<input
			type="text"
			id="name"
			bind:value={name}
			required
			class="mt-1 p-2 w-full bg-gray-600 text-white border border-gray-500 rounded"
		/>
	</div>
	<div class="mb-4">
		<label for="email" class="text-white">Email:</label>
		<input
			type="email"
			id="email"
			bind:value={email}
			required
			class="mt-1 p-2 w-full bg-gray-600 text-white border border-gray-500 rounded"
		/>
	</div>
	<div class="mb-4">
		<label for="message" class="text-white">Message:</label>
		<textarea
			id="message"
			bind:value={message}
			required
			class="mt-1 p-2 w-full bg-gray-600 text-white border border-gray-500 rounded"
		></textarea>
	</div>
	<button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send</button>
</form>
