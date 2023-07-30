export class Invoice {
    // client: string;
    // private details: string;
    // amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.amount = a;
        // this.client = c;
        // this.details = d;
    }
    format() {
        return `${this.amount} and ${this.client} and ${this.details} invoice`;
    }
}
