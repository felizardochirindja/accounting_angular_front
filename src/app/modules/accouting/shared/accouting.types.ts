import { Account } from '../account/account.types';

export interface Fee {
    id?: string;
    name?: string;
    account?: Account;
    value?: number;
}
