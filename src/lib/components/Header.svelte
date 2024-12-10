<script lang="ts">
	import { onMount } from 'svelte';
	import { navigating } from '$app/stores';

	let links = [
		{ href: '/', text: 'Home' },
		{ href: '/vcf-generator', text: 'VCF Generator' },
		{ href: '/tutorial', text: 'Tutorial' },
		{ href: '/testimonials', text: 'Testimonials' }
	];

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	onMount(() => {
		const handleNavigation = () => {
			isMenuOpen = false;
		};

		const unsubscribe = navigating.subscribe((nav) => {
			if (nav?.to) {
				handleNavigation();
			}
		});

		return unsubscribe;
	});
</script>

<nav class="fixed w-full bg-white">
	<div class="mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between py-1.5">
			<div class="flex items-center">
				<a
					href="/"
					class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
				>
					<img src="/logo.png" alt="Logo" class="h-6 w-full" />
				</a>
			</div>

			<!-- Hamburger Menu Button (Mobile) -->
			<div class="flex items-center md:hidden">
				<button
					on:click={toggleMenu}
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#560BAD] hover:text-[#F5F3FF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<!-- Hamburger Icon -->
					{#if !isMenuOpen}
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					{:else}
						<!-- Close Icon -->
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{/if}
				</button>
			</div>

			<!-- Desktop Menu -->
			<div class="hidden md:block">
				<div class="flex items-center">
					<div class="ml-10 flex items-baseline space-x-2">
						{#each links as link}
							<a
								href={link.href}
								class="rounded-md px-3 py-2 font-medium text-gray-800 hover:text-black"
							>
								{link.text}
							</a>
						{/each}
						<div class="flex items-center pl-4">
							<a
								href="https://t.me/wsmemetnih"
								class="rounded-md bg-[#560BAD] px-3 py-2 font-medium text-[#F5F3FF] hover:bg-opacity-90"
							>
								Bergabung
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile Menu (Hidden by default) -->
	<div class="md:hidden" id="mobile-menu" class:hidden={!isMenuOpen}>
		<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
			{#each links as link}
				<a
					href={link.href}
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-[#560BAD] hover:text-[#F5F3FF]"
				>
					{link.text}
				</a>
			{/each}
			<a
				href="https://t.me/wsmemetnih"
				class="block rounded-md bg-[#560BAD] px-3 py-2 text-base font-medium text-[#F5F3FF] hover:bg-opacity-90"
			>
				Bergabung
			</a>
		</div>
	</div>
</nav>
