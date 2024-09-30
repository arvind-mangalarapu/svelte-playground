<!-- components/radioForms/FeedbackForm.svelte -->
<script>
	let feedback = '';
	let rating = '5';

	function handleSubmit() {
		alert(`Feedback: ${feedback}\nRating: ${rating}`);
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="p-4 bg-gray-700 rounded-lg">
	<h2 class="text-lg font-bold text-white mb-2">Feedback</h2>
	<div class="mb-4">
		<label for="feedback" class="text-white">Your Feedback:</label>
		<textarea
			id="feedback"
			bind:value={feedback}
			required
			class="mt-1 p-2 w-full bg-gray-600 text-white border border-gray-500 rounded"
		></textarea>
	</div>

	<div class="mb -4">
		<label>Rating:</label><br />
		{#each [1, 2, 3, 4, 5] as rate}
			<label for={`rating${rate}`} class="text-white mr-2">
				{rate}
				<input type="radio" id={`rating${rate}`} name="rating" bind:group={rating} value={rate} />
			</label><br />
		{/each}
	</div>

	<button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
		>Submit Feedback</button
	>
</form>
