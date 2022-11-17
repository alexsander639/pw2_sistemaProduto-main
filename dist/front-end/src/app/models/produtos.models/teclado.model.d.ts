import { Produto } from "./produtos.model";
export interface Teclado extends Produto {
    rgb: boolean;
    mecanico: boolean;
}
