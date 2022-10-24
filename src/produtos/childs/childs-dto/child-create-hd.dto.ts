/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';

export class CreateHdDto extends CreateProdutoDto{
  /**
    * Informação sobre a quantidade de memória do HD
    * @example 1 TB
    */
  @IsNotEmpty({
    message: 'Informe a quatidade de memória',
  })
  @MaxLength(100, {
    message: 'O texto deve ter menos de 100 caracteres',
  })
  memoria: string;

}