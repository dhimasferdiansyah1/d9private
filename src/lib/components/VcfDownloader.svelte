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
				<p class="text-sm text-zinc-400">
					File {detail.index + 1}: {detail.contacts} contacts
				</p>
			{/each}
		</div>

		<div class="flex flex-col gap-4">
			<div class="flex flex-wrap gap-4">
				{#each vcfContents as _, index}
					<button
						on:click={() => downloadVcf(index)}
						class="rounded-lg bg-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50"
					>
						Download {inputName}-{index + 1}.vcf
					</button>
				{/each}
			</div>

			<button
				on:click={downloadAll}
				class="rounded-lg bg-white px-6 py-3 font-semibold text-zinc-900 transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
			>
				Download All
			</button>
		</div>
	</div>
{/if}
