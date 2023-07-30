import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
	// client: string;
	// private details: string;
	// amount: number;

	constructor(
		readonly client: string,
		private details: string,
		public amount: number
	) {
		// this.amount = a;
		// this.client = c;
		// this.details = d;
	}

	format() {
		return `${this.amount} and ${this.client} and ${this.details} invoice`;
	}
}
