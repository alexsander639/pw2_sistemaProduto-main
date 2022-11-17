/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateProdutoDto {
  /**
    * O nome do produto é para identificação do mesmo
    * @example Monitor Abc
    */
  @IsNotEmpty({
    message: 'Informe um nome de produto',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })
  name: string;

  /**
    * A marca distingue um produto do outro
    * @example LG
    */
  @IsNotEmpty({
    message: 'Informe a marca do produto',
  })
  @MaxLength(200, {
    message: 'A marca deve ter menos de 200 caracteres',
  })
  marca: string;

  /**
    * O valor em R$ do produto
    * @example R$ 550.99
    */
  @IsNotEmpty({
    message: 'Informe um valor',
  })
  valor: number;

  /**
    * A descriçao informa as caracteristicas do produto
    * @example Monitor Lg, 23' pol, LED
    */
   @MaxLength(1000, {
    message: 'A descricao deve ter menos de 1000 caracteres',
  })
  descricao: string;

  /**
    * O tipo do produto
    * @example Monitor, Cooler, null
    */
   @MaxLength(1000, {
    message: 'O tipo de Produto deve ter menos de 1000 caracteres',
  })
  tipoProduto: string;
}
