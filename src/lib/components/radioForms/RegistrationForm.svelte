<!-- components/radioForms/RegistrationForm.svelte -->
<script>
	let username = '';
	let password = '';
	let confirmPassword = '';

	function handleSubmit() {
		if (password === confirmPassword) {
			alert(`Username: ${username}\nPassword: ${password}`);
		} else {
			alert('Passwords do not match!');
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="p-4 bg-gray-700 rounded-lg">
	<h2 class="text-lg font-bold text-white mb-2">Register</h2>
	<div class="mb-4">
		<label for="username" class="text-white">Username:</label>
		<input
			type="text"
			id="username"
			bind:value={username}
			required
			class="mt-1 p-2 w-full bg-gray-600 text-white border border-gray-500 rounded"
		/>
	</div>
	<div class="mb-4">
		<label for="password" class="text-white">Password:</label>
		<input
			type="password"
			id="password"
			bind:value={password}
			required
			class="mt-1 p-2 w-full bg-gray-600 text-white border border-gray-500 rounded"
		/>
	</div>
	<div class="mb-4">
		<label for="confirmPassword" class="text-white">Confirm Password:</label>
		<input
			type="password"
			id="confirmPassword"
			bind:value={confirmPassword}
			required
			class="mt-1 p-2 w-full bg-gray-600 text-white border border-gray-500 rounded"
		/>
	</div>
	<button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
		>Register</button
	>
</form>
