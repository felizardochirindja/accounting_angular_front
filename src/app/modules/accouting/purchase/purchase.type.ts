import { Product } from './../shared/accouting.types';
import { Category, Supplier } from "../shared/accouting.types";

export interface Purchase {
    category?: Category;
    supplier?: Supplier;
    type?: PurchaseType;
    products: Product[];
}

export type PurchaseType = "mercadorias" | "bens" | "consumiveis";

export interface Invoice {
    id?: string;
    code?: string;
    toPay?: number;
    totalPaid?: number;
    remaining?: number;
    additionalCost?: number;
    complete?: boolean;
    supplier?: Supplier;
    category?: Category;
    paymentMethod?: PurchasePaymentMethod;
}

export type PurchasePaymentMethod = {
    name: string;
}
