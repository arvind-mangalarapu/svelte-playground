<script lang="ts">
	export let text: string = 'Button',
		classes: string = '',
		disabled: boolean = false,
		size: 'lg' | 'md' | 'sm' = 'lg',
		kind: 'primary' | 'secondary' | 'tertiary' | 'destructive' = 'primary',
		isLoading: boolean = false;
</script>

<button
	on:click
	class="btn {classes}"
	class:btn--primary={kind === 'primary'}
	class:btn--secondary={kind === 'secondary'}
	class:btn--tertiary={kind === 'tertiary'}
	class:btn--destructive={kind === 'destructive'}
	class:btn--lg={size === 'lg'}
	class:btn--md={size === 'md'}
	class:btn--sm={size === 'sm'}
	class:btn-loading={isLoading}
	{disabled}
>
	{#if isLoading}
		<div
			class:btn--lg={size === 'lg'}
			class:btn--md={size === 'md'}
			class:btn--sm={size === 'sm'}
			class="loader"
		>
			<div
				class="loader h-3 w-3 bg-black rounded-full bg-gradient-to-t from-[#4fd148] via-[#160fdc] to-[#4fd148] flex items-center justify-center"
			>
				<div class="h-2 w-2 bg-black rounded-full"></div>
			</div>
		</div>
	{/if}
	<div class:hidden={isLoading}>
		<slot name="leadingIcon" />
	</div>
	<p
		class="btn-text px-2x"
		class:btn--lg={size === 'lg'}
		class:btn--md={size === 'md'}
		class:btn--sm={size === 'sm'}
	>
		{text}
	</p>
	<div class:hidden={isLoading}>
		<slot name="trailingIcon" />
	</div>
</button>

<style lang="postcss">
	.btn {
		@apply flex items-center justify-center border bg-gradient-to-r;
	}

	/* Button sizes */
	.btn.btn--lg {
		@apply h-[40px] rounded-lg p-3;
	}

	.btn.btn--md {
		@apply h-[32px] rounded-md px-3 py-2;
	}

	.btn.btn--sm {
		@apply h-[24px] rounded-sm px-2 py-1;
	}

	/* Button states */

	/* Primary button states */
	.btn--primary {
		@apply to-[var(--bg-primary)] bg-slate-300 text-black border-red-300;
	}

	.btn--primary:hover {
		@apply from-[var(--bg-primary__hover)];
	}

	.btn--primary:active {
		@apply from-[var(--bg-primary__active)];
	}

	.btn--primary:disabled {
		@apply from-[var(--bg-primary__disabled)] to-[var(--bg-primary__disabled)] border-transparent;
	}

	/* Similar styles for secondary, tertiary, and destructive buttons... */

	/* Loader sizes */
	.loader {
		@apply animate-spin; /* Add spinning animation */
	}

	/* Prevents button events from propagating when loading */
	.btn.btn-loading {
		@apply pointer-events-none;
	}
</style>
