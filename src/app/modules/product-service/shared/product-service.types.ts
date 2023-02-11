import { Fee } from '../../accouting/shared/accouting.types';
import { Account } from '../../accouting/account/account.types';

interface Item {
    id?: string;
    name?: string;
    price?: number;
    account?: {
        mainAccount?: Account;
        mainFee?: Fee;
    }
}

export interface ProductWithoutStock extends Item {
    purchase?: {
        purchasePrice?: number;
        purchaseAccount?: Account;
        purchaseFee?: Fee
    }
}

export interface ProductWithStock extends ProductWithoutStock {
    warehouse?: {
        warehouseName?: string;
        quantity?: string;
        warehouseAccount?: Account;
        warehouseFee?: Fee;
    }
}

export interface Service extends Item {}

type Products = ProductWithoutStock[] | ProductWithStock[];
export type ProductService = Service | ProductWithStock | ProductWithStock;

export interface Items {
    products?: Products;
    services?: Service[];
}
