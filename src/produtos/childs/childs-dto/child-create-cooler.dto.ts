/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';

export class CreateCoolerDto extends CreateProdutoDto{
  /**
    * Infomação sobre se há ou não a presença de RGB no produto
    * @example true
    */
  @IsNotEmpty({
    message: 'Informe se contém RBG ou não',
  })
  rbg: boolean;

}