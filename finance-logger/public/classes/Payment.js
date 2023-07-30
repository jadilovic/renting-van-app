export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} and ${this.details} and ${this.amount} payment`;
    }
}
// export class Payment {
// 	constructor(readonly recipient: string, private details: string, public amount: number) {}
// }
