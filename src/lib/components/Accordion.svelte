<script context="module">
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
</script>

<script>
	/** @type {{ question: string; answer: string; isOpen: boolean }[]} */
	export let items = [];

	const dispatch = createEventDispatcher();
</script>

<div class="space-y-2">
	{#each items as item, index}
		<div class="overflow-hidden rounded-lg border border-zinc-700">
			<button
				class="flex w-full items-center justify-between bg-zinc-900 p-4 text-left text-zinc-200 hover:bg-zinc-800 focus:outline-none"
				on:click={() => dispatch('toggle', index)}
			>
				<span class="font-semibold">{item.question}</span>
				<svg
					class="h-5 w-5 transition-transform duration-200 {item.isOpen
						? 'rotate-180 transform'
						: ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{#if item.isOpen}
				<div class="bg-zinc-800 p-4 text-zinc-400" transition:slide|local>
					<p>{item.answer}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>
