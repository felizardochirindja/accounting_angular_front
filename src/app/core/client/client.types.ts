import { Email } from './../valueObjects/Email.model';

export interface Client {
    name?: string;
    nuit?: string;
    local?: string;
    email?: Email;
    phone?: string;
}
