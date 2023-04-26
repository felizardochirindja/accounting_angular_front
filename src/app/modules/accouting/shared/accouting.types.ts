import { Nuit } from 'src/app/core/valueObjects/Nuit.model';
import { Account } from '../account/account.types';

export interface Tax {
    id?: string;
    name?: string;
    account?: Account;
    value?: number;
}

export interface Supplier {
    id?: string;
    name?: string;
    address?: string;
    contact?: string;
    nuit?: Nuit;
}

export interface Storage {
    id?: string;
    name?: string;
}

export interface Category {
    id?: string;
    name?: string;
}

export interface Expense {
    id?: string;
    name?: string;
    supplier?: Supplier;
    price?: number;
    tax?: Tax;
}

export interface Product {
    id?: string;
    name?: string;
    price?: number;
    sellingPrice?: number;
    quantity?: number;
    category?: Category;
    supplier?: Supplier;
    storage?: Storage;
}
