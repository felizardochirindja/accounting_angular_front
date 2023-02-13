import { Client } from './../client/client.types';

export interface AuthenticationApiResponse {
    accessToken: string;
    client: Client; 
}
