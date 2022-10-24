/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';

export class CreateHeadsetDto extends CreateProdutoDto{
  /**
    * Informação se o Headset é com fio ou sem fio
    * @example Com Fio
    */
  @IsNotEmpty({
    message: 'Informe se é Com Fio ou Sem fio',
  })
  @MaxLength(200, {
    message: 'O texto deve ter menos de 200 caracteres',
  })
  tipo: string;

}