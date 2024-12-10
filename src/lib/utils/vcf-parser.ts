export interface VcfEntry {
	tel: string;
	fn?: string;
	n?: string;
}

export function parseVcf(content: string): VcfEntry[] {
	const entries: VcfEntry[] = [];
	const lines = content.split('\n');
	let currentEntry: Partial<VcfEntry> = {};

	for (const line of lines) {
		const trimmedLine = line.trim();

		if (trimmedLine.startsWith('BEGIN:VCARD')) {
			currentEntry = {};
		} else if (trimmedLine.startsWith('TEL;TYPE=CELL') || trimmedLine.startsWith('TEL:')) {
			currentEntry.tel = trimmedLine.split(':')[1].trim();
		} else if (trimmedLine.startsWith('FN:')) {
			currentEntry.fn = trimmedLine.split(':')[1].trim();
		} else if (trimmedLine.startsWith('N:')) {
			currentEntry.n = trimmedLine.split(':')[1].trim();
		} else if (trimmedLine.startsWith('END:VCARD')) {
			if (currentEntry.tel) {
				entries.push(currentEntry as VcfEntry);
			}
		}
	}

	return entries;
}

export function generateModifiedVcf(
	entries: VcfEntry[],
	range: { name: string; start: number; end: number },
	inputName: string,
	fileIndex: number,
	totalFiles: number // Parameter baru untuk jumlah total file
): string {
	const modifiedEntries: string[] = [];

	// Hitung jumlah entri per file
	const entriesPerFile = Math.ceil(entries.length / totalFiles);

	// Hitung indeks awal dan akhir untuk file saat ini
	const start = fileIndex * entriesPerFile;
	const end = Math.min((fileIndex + 1) * entriesPerFile, entries.length);

	for (let i = start; i < end; i++) {
		const entry = entries[i];
		// Sesuaikan format FN dan N
		const currentCounter = (i - start + 1).toString().padStart(2, '0');
		const vcardEntry = [
			'BEGIN:VCARD',
			'VERSION:3.0',
			`FN:R- ${inputName}-${fileIndex + 1} ${currentCounter}`,
			`N:R- ${inputName}-${fileIndex + 1} ${currentCounter}`,
			`TEL;TYPE=CELL,VOICE,PREF:${normalizeTel(entry.tel)}`,
			'END:VCARD'
		];

		modifiedEntries.push(vcardEntry.join('\n'));
	}

	return modifiedEntries.join('\n');
}

function normalizeTel(tel: string): string {
	const cleaned = tel.replace(/\D/g, '');
	return cleaned.startsWith('+') ? cleaned : '+' + cleaned;
}
