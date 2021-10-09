import { hasFormatter } from '../interfaces/hasFormatter.js';

export class Payments implements hasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,

    ){}

    format() {
        return `${this.recipient} owed $${this.amount} for ${this.details}`
    }
}