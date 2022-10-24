/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';

export class CreateTecladoDto extends CreateProdutoDto{
  /**
    * Informaçãos sobre se há a presença de RGB no teclado
    * @example true
    */
  @IsNotEmpty({
    message: 'Informe se contém RBG ou não',
  })
  rbg: boolean;

  /**
    * Informaçãos sobre se o teclado é mecânico ou não
    * @example false
    */
   @IsNotEmpty({
    message: 'Informe se é Mecânico ou não',
  })
  mecanico: boolean;

}