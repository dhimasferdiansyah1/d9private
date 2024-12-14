<script lang="ts">
	import { enhance } from '$app/forms';

	interface Contact {
		number: string;
		name: string;
	}

	let contacts: Contact[] = [{ number: '', name: '' }];

	function addContact() {
		contacts = [...contacts, { number: '', name: '' }];
	}

	function removeContact(index: number) {
		contacts = contacts.filter((_, i) => i !== index);
	}

	function generateVCF() {
		let vcfContent = '';
		contacts.forEach((contact) => {
			if (contact.number && contact.name) {
				vcfContent += `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
N:${contact.name};;;
TEL;TYPE=CELL,VOICE:${contact.number}
END:VCARD\n`;
			}
		});

		const blob = new Blob([vcfContent], { type: 'text/vcard' });
		const url = URL.createObjectURL(blob);

		const link = document.createElement('a');
		link.href = url;
		link.download = 'contacts.vcf';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	}
</script>

<svelte:head>
	<title>VCF Generator Contact Admin</title>
</svelte:head>

<div class="flex min-h-screen flex-col justify-center bg-zinc-900 py-24 text-zinc-200">
	<div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
		<h1 class="mb-8 text-center text-4xl font-bold text-white">VCF Generator Contact Admin</h1>

		{#each contacts as contact, index (index)}
			<div
				class="mb-4 flex items-center gap-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6 shadow-md"
			>
				<div class="w-full">
					<label for="number-{index}" class="mb-2 block text-sm font-medium text-zinc-300">
						Nomor Telepon
					</label>
					<input
						type="tel"
						id="number-{index}"
						bind:value={contact.number}
						placeholder="Masukkan nomor telepon"
						class="block w-full rounded-md border-zinc-700 bg-zinc-700 px-4 py-3 text-zinc-200 placeholder-zinc-500 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
					/>
				</div>

				<div class="w-full">
					<label for="name-{index}" class="mb-2 block text-sm font-medium text-zinc-300">
						Nama
					</label>
					<input
						type="text"
						id="name-{index}"
						bind:value={contact.name}
						placeholder="Masukkan nama"
						class="block w-full rounded-md border-zinc-700 bg-zinc-700 px-4 py-3 text-zinc-200 placeholder-zinc-500 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
					/>
				</div>

				{#if contacts.length > 1}
					<button
						aria-label="Hapus"
						on:click={() => removeContact(index)}
						class="mt-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-600 hover:bg-red-700"
						title="Hapus"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-trash text-white"
							viewBox="0 0 16 16"
						>
							<path
								d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
							/>
							<path
								d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
							/>
						</svg>
					</button>
				{/if}
			</div>
		{/each}

		<div class="mt-6 flex flex-col gap-4 sm:flex-row">
			<button
				on:click={addContact}
				class="flex w-full items-center justify-center gap-1 rounded-lg bg-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-plus-lg"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1"
					/>
				</svg>
				Tambah Nomor Telepon
			</button>
			<button
				on:click={generateVCF}
				class="flex w-full items-center justify-center gap-4 rounded-lg bg-white px-6 py-3 font-semibold text-zinc-900 transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-file-earmark-arrow-down"
					viewBox="0 0 16 16"
				>
					<path
						d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"
					/>
					<path
						d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
					/>
				</svg>
				Generate VCF
			</button>
		</div>
	</div>
</div>
