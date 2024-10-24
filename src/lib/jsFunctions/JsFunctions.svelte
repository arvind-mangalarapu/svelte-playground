<script lang="ts">
	function printme() {
		console.log('printing...');
	}

	function printThis(param) {
		console.log(param);
	}

	function collectData(x, ...y) {
		console.log(x);
		console.log(y);
	}

	function greeting(name) {
		console.log(`Hello ${name}`);
	}

	greeting('abhi');

	printThis('hello world');

	collectData(1, 2, 3, 4, 5);
</script>

<main class="bg-black text-white h-screen w-screen flex justify-center items-center flex-col">
	<button on:click={printme}>Print</button>
</main>
