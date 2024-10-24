<script lang="ts">
	let value = '';

	const theme = (event) => {
		value = event.target.value;
	};
</script>

<main class="relative" data-theme={value}>
	<select name="select Theme" id="1" class="text-black" on:change={theme}>
		<option value="0">default</option>
		<option value="1">Theme 2</option>
		<option value="2">Theme 3</option>
		<option value="3">Theme 4</option>
	</select>
	<div class="box absolute">
		<div class="box2 nested absolute text-black">
			<div class="box3 nested absolute"></div>
		</div>
	</div>
</main>

<style>
	:root {
		--primary: #0f0;
		--secondary: #ff0;
		--tertiary: #0f0;
		--quaternary: #ff0;
	}

	[data-theme='1'] {
		--primary: #f00;
		--secondary: #ff0;
		--tertiary: #0f0;
		--quaternary: #0ff;
	}

	[data-theme='2'] {
		--primary: #ff0;
		--secondary: #f00;
		--tertiary: #0ff;
		--quaternary: #0f0;
	}

	[data-theme='3'] {
		--primary: #0f0;
		--secondary: #0ff;
		--tertiary: #f00;
		--quaternary: #ff0;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #222;
		color: white;
		font-family: Arial, sans-serif;
		position: relative;
		overflow: hidden;
	}

	.box {
		width: 800px;
		height: 800px;
		background: var(--primary);
		border-radius: 8px;
		border: solid 1px var(--quaternary);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
		margin: 10px;
		position: relative;
		animation: border 2.4s linear infinite;
		animation-delay: 0.8s;
	}

	.box2 {
		width: 600px;
		height: 600px;
		background: var(--secondary);
		border-radius: 8px;
		border: solid 1px var(--quaternary);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;

		animation: border 2s linear infinite;
		animation-delay: 0.5s;
	}

	.box3 {
		width: 400px;
		height: 400px;
		background: var(--tertiary);
		border-radius: 8px;
		border: solid 1px var(--quaternary);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: absolute;
		animation: border 2s linear infinite;
	}

	@keyframes border {
		0% {
			border-radius: 0%;
		}
		50% {
			border-radius: 100%;
		}
		100% {
			border-radius: 0%;
		}
	}
</style>
