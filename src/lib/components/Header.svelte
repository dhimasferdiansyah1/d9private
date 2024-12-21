<script>
	import { page } from '$app/stores';
	import { slide, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let links = [
		{ href: '/', text: 'Home' },
		{ href: '/vcf-generator', text: 'VCF Generator' },
		{ href: '/vcf-generator-admin', text: 'VCF Generator Admin' },
		{ href: '/tutorial', text: 'Tutorial' },
		{ href: '/testimonials', text: 'Testimonials' },
		{ href: '/login', text: 'Login' }
	];

	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav class="fixed left-0 top-0 z-10 w-full border-b border-b-zinc-800 bg-zinc-900">
	<div class="container mx-auto max-w-4xl px-4">
		<div class="flex items-center justify-between py-4">
			<a href="/" class="text-xl font-bold text-white">D9 Private</a>
			<div class="hidden space-x-6 md:flex">
				{#each links as link}
					<a
						href={link.href}
						class="transition duration-300 hover:text-white {$page.url.pathname === link.href
							? 'text-white'
							: 'text-zinc-400 '}"
					>
						{link.text}
					</a>
				{/each}
			</div>

			<button
				class="text-zinc-400 focus:outline-none md:hidden"
				on:click={toggleMenu}
				aria-label="Toggle menu"
			>
				<svg
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					{#if isOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						></path>
					{/if}
				</svg>
			</button>
		</div>

		{#if isOpen}
			<div
				class="absolute left-0 right-0 top-full bg-zinc-900 shadow-md md:hidden"
				transition:slide={{ duration: 300, easing: quintOut }}
			>
				<div class=" py-2">
					{#each links as link}
						<a
							href={link.href}
							class="block px-4 py-2 transition duration-300 hover:bg-zinc-700 hover:text-white {$page
								.url.pathname === link.href
								? 'bg-zinc-700 text-white'
								: 'text-zinc-400 '}"
							on:click={() => (isOpen = false)}
							transition:fade={{ duration: 200 }}
						>
							{link.text}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>
