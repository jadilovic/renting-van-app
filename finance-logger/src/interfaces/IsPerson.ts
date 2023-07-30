export interface IsPerson {
	name: string;
	isActive: boolean;
	amount: number;
	getActive(): void;
	getAmount(): number;
}
