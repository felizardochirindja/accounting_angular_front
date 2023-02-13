import { Nuit } from './../valueObjects/Nuit.model';
import { Email } from './../valueObjects/Email.model';

export interface Client {
    name?: string;
    nuit?: Nuit;
    local?: string;
    email?: Email;
    phone?: string;
}

export type Supplier = Client;
