import { Nuit } from 'src/app/core/valueObjects/Nuit.model';

export interface Tax {
    id?: string;
    name?: string;
    value?: number;
    description?: string;
}

export interface TaxApiPayload {
    id?: string;
    sail?: string;
    porcentage_value?: number;
    description?: string;
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
    taxValue?: number;
}

export interface ExpenseApiPayload {
    id?: string;
    name?: string;
    supplier?: string;
    total_amount?: number;
    tax?: string;
    tax_value?: number;
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

export interface ProductAPI {
    id?: string;
    name?: string;
    price?: number;
    selling_price?: number;
    quantity?: number;
}
