<script lang="ts">
	import Accordion from '$lib/components/Accordion.svelte';

	let faqItems = [
		{
			question: 'Apakah pekerjaan ini scam?',
			answer:
				'Tidak, pekerjaan ini bukan scam. Kami menjamin bahwa Anda akan dibayar sesuai dengan pekerjaan yang Anda selesaikan. Kami memiliki sistem pembayaran yang transparan dan terpercaya.',
			isOpen: false
		},
		{
			question: 'Bagaimana cara kerjanya?',
			answer:
				'Cara kerjanya sangat mudah. Anda hanya perlu mendaftar, bergabung dengan grup Telegram kami, dan mulai mengerjakan tugas-tugas yang tersedia. Silahkan mengikuti tutorial mengerjakan.',
			isOpen: false
		},
		{
			question: 'Berapa banyak yang bisa saya hasilkan?',
			answer:
				'Penghasilan Anda tergantung pada jumlah tugas yang Anda selesaikan dan tingkat kesulitan tugas tersebut. Rata-rata, Anda bisa menghasilkan Rp35.000-Rp45.000 per set tugas yang selesai.',
			isOpen: false
		}
	];

	function toggleAccordion(index: number) {
		faqItems = faqItems.map((item, i) => ({
			...item,
			isOpen: i === index ? !item.isOpen : false
		}));
	}
</script>

<main class="min-h-screen bg-zinc-900 py-28 text-zinc-200">
	<section class="px-4 py-20 md:px-0">
		<div class="container mx-auto text-center">
			<h1 class="mb-4 text-4xl font-bold leading-tight md:text-5xl">
				Selamat Datang di Platform Kami
			</h1>
			<p class="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
				Hasilkan <span class="font-semibold text-white">Rp40.000 / 1 set</span> dengan mudah dan cepat
				dengan platform kami. Kami menyediakan tugas yang dapat Anda kerjakan.
			</p>
			<div class="space-x-4">
				<a
					href="https://t.me/pikachuxd9"
					class="rounded-lg bg-white px-6 py-3 font-semibold text-zinc-900 transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
				>
					Bergabung
				</a>
				<a
					href="/tutorial"
					class="rounded-lg bg-zinc-700 px-6 py-3 font-semibold text-zinc-300 transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-50"
				>
					Tutorial
				</a>
			</div>
		</div>
	</section>

	<section class="bg-zinc-900 py-16">
		<div class="container mx-auto px-4 md:px-0">
			<div class="mx-auto max-w-md overflow-hidden rounded-lg bg-zinc-800">
				<div class="p-6">
					<div class="mb-4 flex items-center">
						<img class="mr-4 h-16 w-16 rounded-full object-cover" src="/admin.jpg" alt="" />
						<div>
							<h2 class="text-xl font-semibold text-white">Admin</h2>
							<p class="text-zinc-400">@memetnee07</p>
						</div>
					</div>
					<div class="flex w-full pt-4">
						<a
							href="https://t.me/memetnee07"
							class="w-full rounded-lg bg-white px-6 py-3 text-center font-semibold text-zinc-900 transition duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
						>
							Chat dengan Saya
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-zinc-900 py-16">
		<div class="container mx-auto px-4 md:px-0">
			<h2 class="mb-8 text-center text-3xl font-bold text-white">
				Pertanyaan yang Sering Diajukan
			</h2>
			<div class="mx-auto max-w-2xl">
				<Accordion items={faqItems} on:toggle={(e) => toggleAccordion(e.detail)} />
			</div>
		</div>
	</section>
</main>
