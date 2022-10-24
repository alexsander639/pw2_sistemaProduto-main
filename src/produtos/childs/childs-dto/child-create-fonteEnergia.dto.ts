/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';

export class CreateFonteEnergiaDto extends CreateProdutoDto{
  /**
    * A quantidade de voltagem da fonte de energia
    * @example 500 v
    */
  @IsNotEmpty({
    message: 'Informe a voltagem da fonte',
  })
  @MaxLength(100, {
    message: 'O texto deve ter menos de 100 caracteres',
  })
  voltagem: string;

}