import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ken',
		fav_color: 'Red'
	}
});

export default app;
