declare module 'vcard-parser' {
	export function parse(
		vcardString: string
	): { [key: string]: string | number | boolean | object }[];
	export function format(
		vcardArray: { [key: string]: string | number | boolean | object }[]
	): string;
}
