<!-- <script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Function to adjust font size
		function adjustFontSize() {
			const containers = document.querySelectorAll('.container');

			function adjustElementFontSize(element, baseFontSize, container) {
				let fontSize = baseFontSize; // Start with a base font size (in px)
				element.style.fontSize = `${fontSize}px`;

				// Adjust the font size if the content overflows
				while (
					element.scrollWidth > container.clientWidth ||
					element.scrollHeight > container.clientHeight
				) {
					fontSize -= 0.5; // Decrease font size
					element.style.fontSize = `${fontSize}px`;
				}
			}

			// Loop through each container
			containers.forEach((container) => {
				const content = container.querySelector('.content');
				if (content) {
					const baseFontSize = parseFloat(container.getAttribute('data-font-size'));
					const containerHeight = parseFloat(container.getAttribute('data-height'));
					container.style.height = `${containerHeight}px`; // Set the container height

					adjustElementFontSize(content, baseFontSize, container);
				}
			});
		}

		// Call the function on mount and on window resize
		adjustFontSize();
		window.addEventListener('resize', adjustFontSize);

		// Cleanup on component destroy
		return () => {
			window.removeEventListener('resize', adjustFontSize);
		};
	});
</script>

<div class="container" data-font-size="22" data-height="50">
	<h2 class="content" data-font-weight="bold">This is a heading that might be too long to fit</h2>
</div>
<div class="container" data-font-size="15" data-height="60">
	<p class="content" data-font-weight="normal">
		This is the first paragraph. It might be quite long depending on the content you add here.
	</p>
</div>
<div class="container" data-font-size="15" data-height="70">
	<p class="content" data-font-weight="normal">
		This is the second paragraph. It might also be quite long depending on the content you add here.
		This is the second paragraph. It might also be quite long depending on the content you add here.
	</p>
</div>

<style>
	.container {
		width: 400px; /* Fixed width */
		padding: 16px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		margin-bottom: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		color: white;
	}

	.content {
		overflow: hidden; /* Hide overflow content */
		margin: 0;
		line-height: 1.2; /* Adjust line height for readability */
		white-space: normal; /* Prevent content from wrapping */
	}

	/* Example styles for font weight */
	.content[data-font-weight='bold'] {
		font-weight: bold;
	}

	.content[data-font-weight='normal'] {
		font-weight: normal;
	}
</style> -->
