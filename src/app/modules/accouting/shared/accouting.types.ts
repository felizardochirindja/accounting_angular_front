import { Account } from '../account/account.types';

export interface Tax {
    id?: string;
    name?: string;
    account?: Account;
    value?: number;
}
