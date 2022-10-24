/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';

export class CreateSsdDto extends CreateProdutoDto{
  /**
    * Informaçãos sobre quantidade de memória do SSD
    * @example 500 gb
    */
  @IsNotEmpty({
    message: 'Informe a quantidade de memória',
  })
  @MaxLength(100, {
    message: 'O texto deve ter menos de 100 caracteres',
  })
  memoria: string;

}
