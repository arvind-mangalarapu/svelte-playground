<script lang="ts">
	export let title: string, description: string, src: string, alt: string, theme: string;
</script>

<main class="max-w-[500px]" data-theme={theme}>
	<div class="relative flex apx-bg-app-bg mx-auto p-3 overflow-hidden">
		<img class="h-full w-full object-cover rounded-lg" {src} {alt} />
		<div
			class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 rounded-lg"
		>
			<h1 class="apx-text-primary text-xl">{title}</h1>
			<p class="apx-text-button--secondary text-lg text-center">{description}</p>
		</div>
	</div>
</main>
