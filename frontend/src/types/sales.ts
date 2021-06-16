import {Seller} from "./seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[];
    last: Boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: Boolean;
    numberOfElements?: number;
    empty?: Boolean;
}

export type SaleSum = 
{
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}