import { Nuit } from 'src/app/core/valueObjects/Nuit.model';
import { Account } from '../account/account.types';

export interface Tax {
    id?: string;
    name?: string;
    account?: Account;
    value?: number;
}

export interface Supplier {
    id: number;
    name: string;
    address: string;
    contact: string;
    nuit: Nuit;
}
