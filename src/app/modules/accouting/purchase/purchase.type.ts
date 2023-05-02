export interface Purchase {
    id?: string;
    name?: string;
    purchasePrice?: number;
    salePrice?: number;
    quantity?: number;
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
