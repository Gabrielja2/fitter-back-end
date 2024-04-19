import { InvalidTicketSelectedNumbersError } from "./error";

export class TicketSelectedNumbers {

    private readonly ticketSelectedNumbers: number[];

    private constructor(ticketSelectedNumbers: number[]) {
        this.ticketSelectedNumbers = ticketSelectedNumbers;
        Object.freeze(this);
    }

    public get value(): number[] {
        return this.ticketSelectedNumbers;
    }

    static create(ticketSelectedNumbers: number[]): TicketSelectedNumbers | InvalidTicketSelectedNumbersError {
        if (!this.validate(ticketSelectedNumbers)) return new InvalidTicketSelectedNumbersError(ticketSelectedNumbers);

        return new TicketSelectedNumbers(ticketSelectedNumbers);
    }

    private static validate(ticketSelectedNumbers: number[]): boolean {
        if (!ticketSelectedNumbers) return false;

        if (ticketSelectedNumbers.length < 15 || ticketSelectedNumbers.length > 20) return false;


        return true;
    }
}