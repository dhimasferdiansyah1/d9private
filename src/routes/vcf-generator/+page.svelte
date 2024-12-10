<script lang="ts">
	import VcfUploader from '$lib/components/VcfUploader.svelte';
	import RandomNameGenerator from '$lib/components/RandomNameGenerator.svelte';
	import VcfDownloader from '$lib/components/VcfDownloader.svelte';
	import { parseVcf, generateModifiedVcf } from '$lib/utils/vcf-parser';
	import { tick } from 'svelte';

	let vcfEntries: any[][] = [];
	let modifiedVcfContents: string[] = [];
	let range: { name: string; start: number; end: number } | null = null;
	let totalContacts: number = 0;
	let inputName: string = '';
	let showDownloader: boolean = false;
	let isProcessing: boolean = false;
	let fileDetails: { index: number; contacts: number }[] = [];

	$: {
		totalContacts = vcfEntries.flat().length;
	}

	function handleFileUpload(
		event: CustomEvent<{ content: string; index: number; baseFileName: string }>
	) {
		const { content, index, baseFileName } = event.detail;
		vcfEntries[index] = parseVcf(content);
		fileDetails[index] = {
			index: index,
			contacts: vcfEntries[index].length
		};
		modifiedVcfContents[index] = '';
		showDownloader = false;
		range = null;
	}

	async function handleNamesGenerated(
		event: CustomEvent<{
			range: { name: string; start: number; end: number };
		}>
	) {
		isProcessing = true;
		range = event.detail.range;
		inputName = range.name;
		await generateVcf();
		await tick();
		await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay 2 detik
		showDownloader = true;
		isProcessing = false;
	}

	async function generateVcf() {
		if (range && vcfEntries.length > 0) {
			const totalFiles = vcfEntries.length;
			for (let i = 0; i < totalFiles; i++) {
				modifiedVcfContents[i] = generateModifiedVcf(
					vcfEntries.flat(),
					range,
					inputName,
					i,
					totalFiles
				);
			}
		}
	}
</script>

<div
	class="container mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center p-4 py-28"
>
	<h1 class="mb-4 text-2xl font-bold">VCF Contact Name Generator</h1>

	<VcfUploader on:fileupload={handleFileUpload} />

	{#if vcfEntries.length > 0}
		<div class="mt-4">
			<RandomNameGenerator bind:totalContacts on:namesgenerated={handleNamesGenerated} />

			{#if showDownloader}
				<div class="mt-4">
					<VcfDownloader
						vcfContents={modifiedVcfContents}
						{inputName}
						showDownloads={showDownloader}
						{fileDetails}
					/>
				</div>
			{/if}
		</div>
	{/if}
</div>
