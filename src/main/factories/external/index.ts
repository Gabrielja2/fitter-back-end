import {
    UserRepositoryAdapter,
    CriptographyAdapter,
    AuthenticationAdapter,
    TicketRepositoryAdapter,
    BalanceRepositoryAdapter,
    TicketConfigRepositoryAdapter,
} from "@/layers/external";


export const userRepositoryAdapter = new UserRepositoryAdapter();
export const criptographyAdapter = new CriptographyAdapter();
export const authenticationAdapter = new AuthenticationAdapter();
export const ticketRepositoryAdapter = new TicketRepositoryAdapter();
export const balanceRepositoryAdapter = new BalanceRepositoryAdapter();
export const ticketConfigRepositoryAdapter = new TicketConfigRepositoryAdapter();


