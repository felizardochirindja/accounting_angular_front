import { Product, ProductAPI } from './../shared/accouting.types';
import { Category, Supplier } from "../shared/accouting.types";

export interface Purchase {
    category?: Category;
    supplier?: Supplier;
    type?: PurchaseType;
    products: Product[];
}

export interface PurchaseAPI {
    order_group?: number;
    supplier?: number;
    prod_type?: PurchaseType;
    products: ProductAPI[];
}

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
    type?: PurchaseType,
    paidAt?: Date,
    createdOn?: Date;
}

export type PurchaseType = "mercadorias" | "bens" | "consumiveis";

export interface InvoiceAPI {
    id: number
    order_title: string
    supplier_name: string
    uploaded_files: UploadedFile[]
    payment_method: string
    transaction_type: string
    code: string
    paid_at: Date
    paid_on: Date
    total_liquid: number
    iva: number
    gross_value: number
    to_pay: number
    total_paid: number
    remaining: number
    additional_cost: number
    complete: boolean
    completed_at: any
    created_on: Date;
}

export interface UploadedFile {
    id: number
    file: string
    transaction: number
}

export type PurchasePaymentMethod = {
    name: string;
}
