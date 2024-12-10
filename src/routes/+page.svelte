<script lang="ts">
	import AdminBadge from '$lib/components/AdminBadge.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import { accordionData } from '$lib/utils/AccordionData';

	let imageUrl = '/bg.jpg?height=400&width=400';
	let adminUsername = '@memetnee07'; // Ganti dengan username admin
	let adminPhotoUrl = '/admin.jpg'; // Ganti dengan URL foto admin
	let telegramLink = 'https://t.me/@memetnee07'; // Ganti dengan link Telegram admin
</script>

<div class="flex min-h-screen flex-col justify-center bg-white py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col-reverse items-center justify-between gap-8 sm:gap-0 md:flex-row">
			<div class="mb-8 md:mb-0 md:w-1/2">
				<h1 class="mb-4 text-4xl font-bold text-gray-900">Selamat Datang di Platform Kami</h1>
				<h2 class="py-8 text-2xl font-bold">Grup baru beroprasi pada 10/12/2024</h2>
				<p class="mb-6 text-xl text-gray-600">
					Hasilkan <span class="font-semibold">Rp35.000 / 1 set</span> dengan mudah dan cepat dengan
					platform kami. Kami menyediakan tugas yang dapat Anda kerjakan.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<a
						href="https://t.me/wsmemetnih"
						class="flex items-center justify-center gap-2 rounded-md bg-[#560BAD] px-6 py-3 font-medium text-white hover:bg-opacity-90"
					>
						<img src="/telegram.webp" alt="Google logo" class="h-6 w-auto" />
						Bergabung
					</a>
					<a
						href="/tutorial"
						class="rounded-md bg-gray-200 px-6 py-3 font-medium text-gray-900 hover:bg-opacity-90"
					>
						Tutorial
					</a>
				</div>
			</div>

			<div class="sm:ml-24 md:w-1/2">
				<img src={imageUrl} alt="Platform illustration" class="h-64 w-auto rounded-md" />
			</div>
		</div>
		<div class="mt-8">
			<AdminBadge {adminUsername} {adminPhotoUrl} {telegramLink} />
		</div>
		<div class="mt-16">
			<h2 class="mb-4 text-2xl font-bold text-gray-900">Frequently Asked Questions (FAQ)</h2>
			{#each accordionData as item}
				<Accordion title={item.title} content={item.content} id={item.id} />
			{/each}
		</div>
	</div>
</div>
