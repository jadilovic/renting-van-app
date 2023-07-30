import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {
	constructor(
		readonly recipient: string,
		private details: string,
		public amount: number
	) {}
	format(): string {
		return `${this.recipient} and ${this.details} and ${this.amount} payment`;
	}
}

// export class Payment {
// 	constructor(readonly recipient: string, private details: string, public amount: number) {}
// }
