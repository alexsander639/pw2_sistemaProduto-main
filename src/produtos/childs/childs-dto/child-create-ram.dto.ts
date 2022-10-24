/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';

export class CreateRamDto extends CreateProdutoDto{
  /**
    * Informaçãos sobre o tipo de DDR do processador
    * @example DDR4
    */
  @IsNotEmpty({
    message: 'Informe o tipo DDR',
  })
  @MaxLength(100, {
    message: 'O texto deve ter menos de 100 caracteres',
  })
  tipo: string;

  /**
    * Informaçãos sobre capacidade do processador
    * @example 100 gb
    */
  @IsNotEmpty({
    message: 'Informe a capacidade',
  })
  @MaxLength(100, {
    message: 'O texto deve ter menos de 100 caracteres',
  })
  capacidade: string;

}