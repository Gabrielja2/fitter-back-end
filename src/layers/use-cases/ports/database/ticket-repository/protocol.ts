import { RegisterTicketDTO } from "@/layers/use-cases/use-cases";
import { TicketModel } from "./model";

export interface TicketRepositoryProtocol {
    registerTicket(data: RegisterTicketDTO): Promise<TicketModel>;
}