<script lang="ts">
	let value = 'apex';
	let themes = ['apex', 'vl'];

	const changeTheme = (selectedTheme) => {
		value = selectedTheme;
	};

	$: console.log(value);
</script>

<main class="h-screen flex flex-col items-center gap-28 bg-gray-700 text-white">
	<h1 class="text-3xl mb-6 apx-text-nav-items apx-bg-sheet">Select Your Theme</h1>

	<div>
		{#each themes as theme}
			<button
				class="text-black p-4 mx-5 mt-4 rounded-md {value === theme
					? 'bg-white text-black'
					: 'bg-black text-white'}"
				on:click={() => changeTheme(theme)}
			>
				{theme}
			</button>
		{/each}
	</div>

	<div class="apx-bg-app-bg apx-text-secondary max-w-[80%] mx-auto p-3" data-theme={value}>
		<div class="">
			<h2 class="text-3xl apx-text-secondary hover:apx-text-tag--active apx-bg-tag--active">
				Lorem ipsum dolor sit amet
			</h2>
			<p class="mt-4 apx-text-button--secondary border apx-border-primary">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio cupiditate quo quos porro
				architecto perferendis maiores, deleniti aspernatur hic nulla explicabo enim placeat a
				labore sit! Maxime, illum laudantium!
			</p>
			<div class=" apx-bg-left-chat mt-8 border apx-border-warning">
				<a class="apx-text-button--text" href="/">link text.</a>
				<a class="apx-text-tag--in-progress" href="/">link text.</a>
				<a class="apx-text-button--tertiary" href="/">link text.</a>
			</div>
		</div>
	</div>

	<p class="mt-4">Current Theme: {value}</p>
</main>

<!-- <style>
	:root {
		--primary: #0f0;
		--secondary: #ff0;
	}

	[data-theme='Dark'] {
		--primary: #222;
		--secondary: #444;
		color: white;
	}

	[data-theme='Light'] {
		--primary: #fff;
		--secondary: #ddd;
		color: black;
	}

	[data-theme='Colorful'] {
		--primary: #ff5733;
		--secondary: #33ff57;
		color: white;
	}

	[data-theme='Retro'] {
		--primary: #f39c12;
		--secondary: #8e44ad;
		color: white;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: var(--primary);
		font-family: Arial, sans-serif;
	}

	.box {
		width: 800px;
		height: 800px;
		background: var(--primary);
		border-radius: 8px;
		border: solid 1px var(--secondary);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.box2 {
		width: 600px;
		height: 600px;
		background: var(--secondary);
		border-radius: 8px;
	}

	.box3 {
		width: 400px;
		height: 400px;
		background: var(--primary);
		border-radius: 8px;
	}
</style> -->
<!-- <style>
	[data-theme='apex'] {
		--secondary-100: #e3e5e4ff;
		--secondary-200: #c8cccbff;
		--secondary-300: #adb2b1ff;
		--secondary-400: #929997ff;
		--secondary-500: #777f7dff;
		--secondary-600: #5c6663ff;
		--secondary-700: #414c49ff;
		--secondary-800: #26332fff;
		--secondary-900: #0b1a16ff;
		--secondary-white: #ffffffff;
		--transparent-white-12: #ffffff1f;
		--transparent-primary-900-8: #22504314;
		--tertiary-200: #f7f7f7ff;
		--tertiary-300: #f2f2f2ff;
		--special-orange-200: #f6e0d5ff;
		--special-orange-800: #dd7742ff;
		--special-gray-100: #e2e2e2ff;
		--special-gray-600: #555555ff;
		--info-800: #177ee5ff;
		--primary-100: #e6ebeaff;
		--primary-200: #cdd8d5ff;
		--primary-300: #b5c4c0ff;
		--primary-400: #9cb1abff;
		--primary-500: #849d96ff;
		--primary-600: #6b8a81ff;
		--primary-700: #53766cff;
		--primary-800: #3a6357ff;
		--primary-900: #225043ff;
		--error-100: #fae2e2ff;
		--error-200: #f6c6c6ff;
		--error-300: #f2aaaaff;
		--error-400: #ee8d8dff;
		--error-500: #e97171ff;
		--error-600: #e55555ff;
		--error-700: #e13838ff;
		--error-800: #dd1c1cff;
		--error-900: #d90000ff;
		--success-100: #e7f3edff;
		--success-200: #d5f2e4ff;
		--success-300: #b9dbcbff;
		--success-400: #a1cfb9ff;
		--success-500: #8ac3a8ff;
		--success-600: #73b797ff;
		--success-700: #5bab85ff;
		--success-800: #449f74ff;
		--success-900: #2d9463ff;
		--warning-100: #fdf7eeff;
		--warning-200: #fbefddff;
		--warning-300: #f9e8cdff;
		--warning-400: #f7e0bcff;
		--warning-500: #f5d9abff;
		--warning-600: #f3d19bff;
		--warning-700: #f1ca8aff;
		--warning-800: #efc279ff;
		--warning-900: #edbb69ff;
	}
	[data-theme='apex'] {
		--apx-bg-nav-bar: var(--primary-900);
		--apx-bg-button--primary: var(--primary-900);
		--apx-bg-app-bg: var(--tertiary-200);
		--apx-bg-sheet: var(--tertiary-200);
		--apx-bg-card: var(--secondary-white);
		--apx-bg-button--primary--pressed: var(--transparent-white-12);
		--apx-bg-left-chat: var(--tertiary-200);
		--apx-bg-plan-card: var(--primary-100);
		--apx-bg-button--secondary: var(--primary-100);
		--apx-bg-selected-option: var(--primary-100);
		--apx-bg-right-chat: var(--primary-100);
		--apx-bg-tag--active: var(--success-200);
		--apx-bg-tag--in-progress: var(--special-orange-200);
		--apx-bg-tag--skipped: var(--special-gray-100);
		--apx-bg-warning: var(--warning-300);
		--apx-bg-input-field: var(--secondary-white);
		--apx-bg-indicators: var(--secondary-white);
		--apx-bg-button--tertiary: var(--secondary-white);
		--apx-bg-error: var(--error-100);
		--apx-bg-button--secondary--pressed: var(--transparent-primary-900-8);
		--apx-bg-button--tertiary--pressed: var(--tertiary-200);
		--apx-border-primary: var(--primary-300);
		--apx-border-secondary: var(--secondary-100);
		--apx-border-error: var(--error-500);
		--apx-border-warning: var(--warning-900);
		--apx-text-primary: var(--secondary-800);
		--apx-text-secondary: var(--secondary-600);
		--apx-text-button--primary: var(--secondary-white);
		--apx-text-button--secondary: var(--primary-900);
		--apx-text-error: var(--error-900);
		--apx-text-tag--active: var(--success-900);
		--apx-text-tag--in-progress: var(--special-orange-800);
		--apx-text-tag--skipped: var(--special-gray-600);
		--apx-text-credit-amount: var(--success-900);
		--apx-text-debit-amount: var(--special-orange-800);
		--apx-text-button__link: var(--primary-900);
		--apx-text-button--text: var(--primary-900);
		--apx-text-nav-items: var(--secondary-white);
		--apx-text-image__text: var(--secondary-white);
		--apx-text-button--tertiary: var(--primary-900);
		--apx-icon-primary: var(--primary-900);
		--apx-icon-secondary: var(--secondary-700);
	}

	[data-theme='vl'] {
		--info-800: #177ee5ff;
		--secondary-100: #e8e7e5ff;
		--secondary-200: #d2cfcbff;
		--secondary-300: #bcb7b2ff;
		--secondary-400: #a59f98ff;
		--secondary-500: #8f877eff;
		--secondary-600: #796f65ff;
		--secondary-700: #62574bff;
		--secondary-800: #4c3f31ff;
		--secondary-900: #362818ff;
		--secondary-white: #ffffffff;
		--tertiary-100: #fbfbfbff;
		--tertiary-400: #fef1e4ff;
		--error-100: #fae2e2ff;
		--error-200: #f6c6c6ff;
		--error-300: #f2aaaaff;
		--error-400: #ee8d8dff;
		--error-500: #e97171ff;
		--error-600: #e55555ff;
		--error-700: #e13838ff;
		--error-800: #dd1c1cff;
		--error-900: #d90000ff;
		--success-100: #e7f3edff;
		--success-200: #d5f2e4ff;
		--success-300: #b9dbcbff;
		--success-400: #a1cfb9ff;
		--success-500: #8ac3a8ff;
		--success-600: #73b797ff;
		--success-700: #5bab85ff;
		--success-800: #449f74ff;
		--success-900: #2d9463ff;
		--warning-100: #fdf7eeff;
		--warning-200: #fbefddff;
		--warning-300: #f9e8cdff;
		--warning-400: #f7e0bcff;
		--warning-500: #f5d9abff;
		--warning-600: #f3d19bff;
		--warning-700: #f1ca8aff;
		--warning-800: #efc279ff;
		--warning-900: #edbb69ff;
		--special-orange-200: #f6e0d5ff;
		--special-orange-800: #dd7742ff;
		--special-gray-100: #e2e2e2ff;
		--special-gray-600: #555555ff;
		--primary-100: #fdece6ff;
		--primary-200: #fbdacdff;
		--primary-300: #fac7b5ff;
		--primary-400: #f8b59cff;
		--primary-500: #f7a284ff;
		--primary-600: #f5906bff;
		--primary-700: #f47d53ff;
		--primary-800: #f26b3aff;
		--primary-900: #f15922ff;
		--transparent-white-12: #ffffff1f;
		--transparent-primary-900-8: #f1592214;
	}
	[data-theme='vl'] {
		--apx-bg-nav-bar: var(--secondary-white);
		--apx-bg-button--primary: var(--primary-800);
		--apx-bg-app-bg: var(--tertiary-400);
		--apx-bg-sheet: var(--tertiary-100);
		--apx-bg-card: var(--secondary-white);
		--apx-bg-button--primary--pressed: var(--transparent-white---12);
		--apx-bg-left-chat: var(--tertiary-100);
		--apx-bg-plan-card: var(--secondary-white);
		--apx-bg-button--secondary: var(--primary-200);
		--apx-bg-selected-option: var(--primary-200);
		--apx-bg-right-chat: var(--primary-200);
		--apx-bg-tag--active: var(--success-200);
		--apx-bg-tag--in-progress: var(--special-orange-200);
		--apx-bg-tag--skipped: var(--special-gray-100);
		--apx-bg-warning: var(--warning-300);
		--apx-bg-input-field: var(--secondary-white);
		--apx-bg-indicators: var(--secondary-900);
		--apx-bg-button--tertiary: var(--secondary-white);
		--apx-bg-error: var(--error-100);
		--apx-bg-button--secondary--pressed: var(--transparent-primary-900-8);
		--apx-bg-button--tertiary--pressed: var(--tertiary-100);
		--apx-border-primary: var(--primary-300);
		--apx-border-secondary: var(--secondary-100);
		--apx-border-error: var(--error-500);
		--apx-border-warning: var(--warning-900);
		--apx-text-primary: var(--secondary-900);
		--apx-text-secondary: var(--secondary-600);
		--apx-text-button--primary: var(--secondary-white);
		--apx-text-button--secondary: var(--primary-900);
		--apx-text-error: var(--error-900);
		--apx-text-tag--active: var(--success-900);
		--apx-text-tag--in-progress: var(--special-orange-800);
		--apx-text-tag--skipped: var(--special-gray-600);
		--apx-text-credit-amount: var(--success-900);
		--apx-text-debit-amount: var(--special-orange-800);
		--apx-text-button__link: var(--primary-900);
		--apx-text-button--text: var(--primary-900);
		--apx-text-nav-items: var(--primary-900);
		--apx-text-image__text: var(--secondary-white);
		--apx-text-button--tertiary: var(--primary-900);
		--apx-icon-primary: var(--primary-900);
		--apx-icon-secondary: var(--secondary-900);
	}
</style> -->
