<script lang="ts">
	import type { Config } from '@sveltejs/adapter-vercel';

	export const config: Config = {
		runtime: 'nodejs22.x'
	};
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
