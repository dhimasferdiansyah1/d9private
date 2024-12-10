<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { faker } from '@faker-js/faker';
	import { slide } from 'svelte/transition';
	import { Icon } from 'svelte-hero-icons';
	import { Sparkles } from 'svelte-hero-icons';

	const dispatch = createEventDispatcher();

	export let totalContacts = 0; // Total kontak dari semua file

	let selectedName: string = '';
	let range: { name: string; start: number; end: number } = {
		name: '',
		start: 1,
		end: totalContacts
	};
	let isGenerating = false;

	function generateRandomName() {
		selectedName = faker.person.fullName().replace(/\s+/g, '');
	}

	function updateRange() {
		range = {
			name: selectedName,
			start: 1,
			end: totalContacts
		};

		dispatch('namesgenerated', {
			range // Hanya kirim 1 range
		});
	}

	async function handleGenerate() {
		isGenerating = true;
		updateRange();
		await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate processing
		isGenerating = false;
	}
</script>

<div class="space-y-6 rounded-xl border bg-white p-6">
	<div class="flex items-center justify-between">
		<div class="flex items-center space-x-4">
			<span class="font-semibold text-gray-700">
				Total Contacts (All Files):
				<span class="text-blue-600">{totalContacts}</span>
			</span>
		</div>
	</div>

	<div class="space-y-4">
		<div
			transition:slide
			class="flex items-center space-x-4 rounded-lg border border-gray-200 bg-gray-50 p-4"
		>
			<div class="flex-grow">
				<label for="name" class="mb-1 block text-sm font-medium text-gray-700"> Name </label>
				<div class="flex space-x-3">
					<input
						id="name"
						type="text"
						bind:value={selectedName}
						placeholder="Enter name for all files"
						class="input input-bordered w-full"
					/>
					<button
						on:click={generateRandomName}
						class="btn btn-ghost text-green-600 hover:bg-green-50"
						title="Generate Random Name"
					>
						<Icon src={Sparkles} class="h-6 w-6" />
					</button>
				</div>
			</div>
		</div>
	</div>

	{#if !isGenerating}
		<button on:click={handleGenerate} class="btn btn-primary w-full">Generate</button>
	{:else}
		<div
			class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-4"
		>
			<div class="h-6 w-6 animate-spin rounded-full border-t-2 border-blue-500" />
		</div>
	{/if}
</div>

<style global>
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		transition: all 0.2s;
	}
	.btn-primary {
		background-color: #560bad;
		color: white;
	}
	.btn-primary:hover {
		background-color: #5f10ba;
	}
	.btn-ghost {
		background-color: transparent;
	}
	.btn-ghost:hover {
		background-color: #f3f4f6;
	}
	.input {
		border-radius: 0.5rem;
		border: 1px solid #d1d5db;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		outline: none;
	}
	.input:focus {
		box-shadow: 0 0 0 2px #9951eb;
	}
	.input-bordered {
		border: 1px solid #d1d5db;
	}
</style>
