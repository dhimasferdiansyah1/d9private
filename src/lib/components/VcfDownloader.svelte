<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import * as JSZip from 'jszip';

	export let vcfContents: string[] = [];
	export let inputName: string = '';
	export let showDownloads: boolean = false;
	export let fileDetails: { index: number; contacts: number }[] = [];

	const dispatch = createEventDispatcher();

	function downloadVcf(index: number) {
		const vcfContent = vcfContents[index];
		if (!vcfContent) return;

		const blob = new Blob([vcfContent], { type: 'text/vcf' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${inputName}-${index + 1}.vcf`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}

	async function downloadAll() {
		const zip = new JSZip.default();
		vcfContents.forEach((content, index) => {
			zip.file(`${inputName}-${index + 1}.vcf`, content);
		});

		const zipBlob = await zip.generateAsync({ type: 'blob' });

		// Metode manual untuk mendownload file ZIP
		const url = URL.createObjectURL(zipBlob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `${inputName}.zip`;
		link.style.display = 'none'; // Sembunyikan elemen <a>
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);

		dispatch('downloadall');
	}
</script>

{#if showDownloads}
	<div class="mt-4 space-y-2">
		<div class="mb-2">
			{#each fileDetails as detail}
				<p class="text-sm">
					File {detail.index + 1}: {detail.contacts} contacts
				</p>
			{/each}
		</div>

		{#each vcfContents as _, index}
			<button
				on:click={() => downloadVcf(index)}
				class="mb-2 mr-2 rounded border border-[#560BAD] bg-[#F5F3FF] px-4 py-2 text-[#560BAD] hover:bg-[#e4dfff]"
			>
				Download {inputName}-{index + 1}.vcf
			</button>
		{/each}

		<button
			on:click={downloadAll}
			class="rounded bg-[#560BAD] px-4 py-2 text-white hover:bg-opacity-90"
		>
			Download All
		</button>
	</div>
{/if}
