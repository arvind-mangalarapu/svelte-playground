import plugin from 'tailwindcss/plugin.js';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.apx-bg-nav-bar': { 'background-color': 'var(--apx-bg-nav-bar)' },
				'.apx-bg-button--primary': { 'background-color': 'var(--apx-bg-button--primary)' },
				'.apx-bg-app-bg': { 'background-color': 'var(--apx-bg-app-bg)' },
				'.apx-bg-sheet': { 'background-color': 'var(--apx-bg-sheet)' },
				'.apx-bg-card': { 'background-color': 'var(--apx-bg-card)' },
				'.apx-bg-button--primary--pressed': {
					'background-color': 'var(--apx-bg-button--primary--pressed)'
				},
				'.apx-bg-left-chat': { 'background-color': 'var(--apx-bg-left-chat)' },
				'.apx-bg-plan-card': { 'background-color': 'var(--apx-bg-plan-card)' },
				'.apx-bg-button--secondary': { 'background-color': 'var(--apx-bg-button--secondary)' },
				'.apx-bg-selected-option': { 'background-color': 'var(--apx-bg-selected-option)' },
				'.apx-bg-right-chat': { 'background-color': 'var(--apx-bg-right-chat)' },
				'.apx-bg-tag--active': { 'background-color': 'var(--apx-bg-tag--active)' },
				'.apx-bg-tag--in-progress': { 'background-color': 'var(--apx-bg-tag--in-progress)' },
				'.apx-bg-tag--skipped': { 'background-color': 'var(--apx-bg-tag--skipped)' },
				'.apx-bg-warning': { 'background-color': 'var(--apx-bg-warning)' },
				'.apx-bg-input-field': { 'background-color': 'var(--apx-bg-input-field)' },
				'.apx-bg-indicators': { 'background-color': 'var(--apx-bg-indicators)' },
				'.apx-bg-button--tertiary': { 'background-color': 'var(--apx-bg-button--tertiary)' },
				'.apx-bg-error': { 'background-color': 'var(--apx-bg-error)' },
				'.apx-bg-button--secondary--pressed': {
					'background-color': 'var(--apx-bg-button--secondary--pressed)'
				},
				'.apx-bg-button--tertiary--pressed': {
					'background-color': 'var(--apx-bg-button--tertiary--pressed)'
				},
				'.apx-border-primary': { 'border-color': 'var(--apx-border-primary)' },
				'.apx-border-secondary': { 'border-color': 'var(--apx-border-secondary)' },
				'.apx-border-error': { 'border-color': 'var(--apx-border-error)' },
				'.apx-border-warning': { 'border-color': 'var(--apx-border-warning)' },
				'.apx-text-primary': { color: 'var(--apx-text-primary)' },
				'.apx-text-secondary': { color: 'var(--apx-text-secondary)' },
				'.apx-text-button--primary': { color: 'var(--apx-text-button--primary)' },
				'.apx-text-button--secondary': { color: 'var(--apx-text-button--secondary)' },
				'.apx-text-error': { color: 'var(--apx-text-error)' },
				'.apx-text-tag--active': { color: 'var(--apx-text-tag--active)' },
				'.apx-text-tag--in-progress': { color: 'var(--apx-text-tag--in-progress)' },
				'.apx-text-tag--skipped': { color: 'var(--apx-text-tag--skipped)' },
				'.apx-text-credit-amount': { color: 'var(--apx-text-credit-amount)' },
				'.apx-text-debit-amount': { color: 'var(--apx-text-debit-amount)' },
				'.apx-text-button__link': { color: 'var(--apx-text-button__link)' },
				'.apx-text-button--text': { color: 'var(--apx-text-button--text)' },
				'.apx-text-nav-items': { color: 'var(--apx-text-nav-items)' },
				'.apx-text-image__text': { color: 'var(--apx-text-image__text)' },
				'.apx-text-button--tertiary': { color: 'var(--apx-text-button--tertiary)' },
				'.apx-icon-primary': { 'background-color': 'var(--apx-icon-primary)' },
				'.apx-icon-secondary': { 'background-color': 'var(--apx-icon-secondary)' }
			});
		})
	]
};
