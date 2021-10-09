import { hasFormatter } from '../interfaces/hasFormatter.js';

export class Invoice implements hasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,

    ){}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}