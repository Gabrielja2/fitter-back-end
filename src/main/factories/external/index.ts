import { UserRepositoryAdapter, CriptographyAdapter, AuthenticationAdapter, TicketRepositoryAdapter } from "@/layers/external";


export const userRepositoryAdapter = new UserRepositoryAdapter();
export const criptographyAdapter = new CriptographyAdapter();
export const authenticationAdapter = new AuthenticationAdapter();
export const ticketRepositoryAdapter = new TicketRepositoryAdapter();

