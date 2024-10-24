<script lang="ts">
	export let description = '';
	export let number = 41;
</script>

<main class="flex items-center justify-center h-screen">
	<div class="card flex border max-w-max gap-2 p-3 rounded-xl items-center">
		<div class="h-6 w-6 rounded-lg bg-red-500"></div>
		<div class="leading-auto font-bold text-2xl">{number}</div>
		<div class="text-wrap">{description}</div>
	</div>
</main>
