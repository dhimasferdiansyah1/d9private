// src/lib/utils/AccordionData.ts
export interface AccordionItem {
	id: string;
	title: string;
	content: string;
}

export const accordionData: AccordionItem[] = [
	{
		id: 'accordion-1',
		title: 'Apakah pekerjaan ini scam?',
		content: `
        <p>Tidak, pekerjaan ini bukan scam. Kami menjamin bahwa Anda akan dibayar sesuai dengan pekerjaan yang Anda selesaikan. Kami memiliki sistem pembayaran yang transparan dan terpercaya.</p>
        <p>Namun, penting untuk berhati-hati terhadap pihak-pihak yang tidak bertanggung jawab yang mungkin mengatasnamakan platform kami. Pastikan Anda hanya berurusan dengan admin resmi melalui kontak yang tertera di platform kami.</p>
      `
	},
	{
		id: 'accordion-2',
		title: 'Bagaimana cara kerjanya?',
		content: `
        <p>Cara kerjanya sangat mudah. Anda hanya perlu mendaftar, bergabung dengan grup Telegram kami, dan mulai mengerjakan tugas-tugas yang tersedia. Silahkan mengikuti tutorial mengerjakan.</p>
        <p>Setelah Anda menyelesaikan tugas, Anda akan mendapatkan bayaran sesuai dengan yang tertera.</p>
      `
	},
	{
		id: 'accordion-3',
		title: 'Berapa banyak yang bisa saya hasilkan?',
		content: `
        <p>Penghasilan Anda tergantung pada jumlah tugas yang Anda selesaikan dan tingkat kesulitan tugas tersebut. Rata-rata, Anda bisa menghasilkan Rp35.000-Rp45.000 per set tugas yang selesai.</p>
        <p>Semakin banyak waktu dan usaha yang Anda dedikasikan, semakin banyak pula yang bisa Anda hasilkan.</p>
      `
	},
	{
		id: 'accordion-4',
		title: 'Bagaimana cara pembayarannya?',
		content: `
        <p>Kami menyediakan beberapa metode pembayaran yang bisa Anda pilih, seperti transfer bank, e-wallet. Anda bisa memilih metode yang paling sesuai dengan kebutuhan Anda.</p>
        <p>Pembayaran akan diproses setelah Anda menyelesaikan tugas dan diverifikasi oleh admin.</p>
      `
	}
];
