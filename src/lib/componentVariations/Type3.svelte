<script lang="ts">
	export let title: string, description: string, src: string, alt: string, theme: string;
</script>

<main class="max-w-[500px]" data-theme={theme}>
	<div class="flex flex-col apx-bg-app-bg apx-text-secondary mx-auto p-3">
		<h1 class="apx-text-primary apx-bg-warning text-center">{title}</h1>
		<p class="apx-text-button--secondary text-2xl text-center max-w-[300px] mx-auto">
			{description}
		</p>
		<div class="w-full h-48 mt-4">
			<img class="apx-bg-card h-full w-full object-cover rounded-lg shadow-lg" {src} {alt} />
		</div>
	</div>
</main>
