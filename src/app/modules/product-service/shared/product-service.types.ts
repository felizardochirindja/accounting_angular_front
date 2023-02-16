import { Tax } from '../../accouting/shared/accouting.types';

interface Item {
    id?: string;
    name?: string;
    price?: number;
    account?: {
        mainTax?: Tax;
    }
}

export interface ProductWithoutStock extends Item {
    purchase?: {
        purchasePrice?: number;
        purchaseTax?: Tax
    }
}

export interface ProductWithStock extends ProductWithoutStock {
    warehouse?: {
        warehouseName?: string;
        quantity?: string;
        warehouseTax?: Tax;
    }[]
}

export interface Service extends Item {}

export type Items = Service | ProductWithStock | ProductWithStock;
