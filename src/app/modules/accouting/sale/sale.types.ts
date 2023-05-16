import { Product } from "../shared/accouting.types";

export interface SellingInvoice {
    id?: string;
    code?: string;
    toPay?: number;
    totalPaid?: number;
    remaining?: number;
    additionalCost?: number;
    complete?: boolean;
    client?: {
        name: string;
    };
    products?: Product[];
}