<script lang="ts">
	export let title: string, description: string, src: string, alt: string, theme: string;
</script>

<main class="max-w-[500px]" data-theme={theme}>
	<div class="flex apx-bg-app-bg apx-text-secondary mx-auto p-3">
		<div class="w-48 h-48 mr-4">
			<img class="apx-bg-card h-full w-full object-cover rounded-full" {src} {alt} />
		</div>
		<div class="flex flex-col gap-3">
			<h1 class="apx-text-primary apx-bg-warning">{title}</h1>
			<p class="apx-text-button--secondary text-xl">{description}</p>
		</div>
	</div>
</main>
