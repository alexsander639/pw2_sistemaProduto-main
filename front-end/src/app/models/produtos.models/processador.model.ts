import { Produto } from "./produtos.model";

export interface Processador extends Produto{
  gigahertz: number;
  cache: number;
}
