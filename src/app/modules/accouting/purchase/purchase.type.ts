import { Category, Storage, Supplier } from "../shared/accouting.types";

export interface Purchase {
    name?: string;
    price?: number;
    sellingPrice?: number;
    quantity?: number;
    category?: Category;
    supplier?: Supplier;
    storage?: Storage;
}

export interface Invoice {
    id?: string
    code?: string
    toPay?: number
    totalPaid?: number
    remaining?: number
    additionalCost?: number
    complete?: boolean,
    supplier?: Supplier,
    category?: Category,
}
