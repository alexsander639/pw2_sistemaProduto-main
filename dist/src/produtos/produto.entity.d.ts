import { BaseEntity } from "typeorm";
export declare class Produto extends BaseEntity {
    id: number;
    name: string;
    marca: string;
    status: boolean;
    valor: number;
    descricao: string;
    tipoProduto: string;
}
