<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let files: FileList | null = null;
	const dispatch = createEventDispatcher();
	const maxFiles = 50; // Batas upload file

	async function handleFileUpload() {
		if (files && files.length > 0) {
			if (files.length > maxFiles) {
				alert(`Maximum upload is ${maxFiles} files.`);
				return;
			}

			const fileContents: string[] = [];

			for (let i = 0; i < files.length; i++) {
				const file = files[i];
				const baseFileName = file.name.split('.').slice(0, -1).join('.');

				const reader = new FileReader();

				const content = await new Promise<string>((resolve) => {
					reader.onload = (e) => resolve(e.target?.result as string);
					reader.readAsText(file);
				});

				fileContents.push(content);
				dispatch('fileupload', { content, index: i, baseFileName });
			}
		}
	}
</script>

<div class="flex flex-col items-center space-y-4">
	<label class="block">
		<span class="sr-only">Choose VCF file (Max: {maxFiles} files)</span>
		<input
			type="file"
			accept=".vcf"
			multiple
			class="block w-full text-sm text-zinc-500
            file:mr-4 file:rounded-full file:border-0
            file:bg-zinc-700 file:px-4
            file:py-2 file:text-sm
            file:font-semibold file:text-white
            hover:file:bg-zinc-600"
			bind:files
			on:change={handleFileUpload}
		/>
	</label>
	<p class="text-sm text-zinc-500">Maximum upload: {maxFiles} files</p>
</div>
