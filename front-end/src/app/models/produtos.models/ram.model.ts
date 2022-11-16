import { Produto } from "./produtos.model";

export interface Ram extends Produto{
  tipo: string;
  capacidade: string;
}
