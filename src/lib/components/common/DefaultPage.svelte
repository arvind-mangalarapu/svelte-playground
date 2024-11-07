<script>
	export let theme = 'apex';

	const toggleTheme = () => {
		if (theme === 'apex') {
			theme = 'vl';
		} else {
			theme = 'apex';
		}
	};
</script>

<main
	class="bg-black text-white h-screen w-screen flex justify-center items-center flex-col"
	data-theme={theme}
>
	<button on:click={toggleTheme}>Toggle Theme</button>
	<h2 class="apx-bg-nav-bar">jkhwbfhbewkjhfbkjb</h2>
</main>

<style>
	:root {
		--apx-bg-nav-bar: red;
	}

	[data-theme='apex'] {
		--apx-bg-nav-bar: blue;
	}

	[data-theme='vl'] {
		--apx-bg-nav-bar: green;
	}
</style>
