import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['chart.js/**','svelte-chartjs/**','chartjs-plugin-datalabels/**']
	}
};

export default config;
