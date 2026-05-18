import { StatusValue } from "./pills";

export interface Bioweapon {
    id: string;
    name: string;
    classification: string;
    status: StatusValue;
    price: number;
    avatar: string;
    description: string;
    abilities: string[];
}