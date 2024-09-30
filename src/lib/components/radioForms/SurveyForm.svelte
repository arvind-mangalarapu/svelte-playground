<!-- components/radioForms/SurveyForm.svelte -->
<script>
	let age = '';
	let gender = '';
	let interests = [];

	function handleSubmit() {
		alert(`Age: ${age}\nGender: ${gender}\nInterests: ${interests.join(', ')}`);
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="p-4 bg-gray-700 rounded-lg">
	<h2 class="text-lg font-bold text-white mb-2">Survey</h2>

	<div class="mb-4">
		<label for="age" class="text-white">Age:</label>
		<input
			type="number"
			id="age"
			bind:value={age}
			required
			class="mt-1 p-2 w-full bg-gray-600 text-white border border-gray-500 rounded"
		/>
	</div>

	<div class="mb-4 text-white text-2xl w-40">
		<label class="underline">Gender :</label><br />
		{#each ['Male', 'Female', 'Other'] as g}
			<label for={`gender${g}`} class="text-white mr-2">
				{g}
				<input type="radio" id={`gender${g}`} name="gender" bind:group={gender} value={g} />
			</label><br />
		{/each}
	</div>

	<div class="mb -4">
		<label class="text-white text-2xl underline">Interests:</label><br />
		{#each ['Sports', 'Music', 'Travel', 'Reading'] as interest}
			<label for={`interest${interest}`} class="text-white mr - 2">
				{interest}
				<input type="checkbox" id={`interest${interest}`} bind:group={interests} value={interest} />
			</label><br />
		{/each}
	</div>

	<button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
		>Submit Survey</button
	>
</form>
