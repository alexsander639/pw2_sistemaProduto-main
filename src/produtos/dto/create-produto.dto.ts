/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty({
    message: 'Informe um nome de produto',
  })
  @MaxLength(200, {
    message: 'O nome deve ter menos de 200 caracteres',
  })
  name: string;

  @IsNotEmpty({
    message: 'Informe um nome de produto',
  })
  @MaxLength(200, {
    message: 'A marca deve ter menos de 200 caracteres',
  })
  marca: string;

  @IsNotEmpty({
    message: 'Informe um valor',
  })
  valor: number;

  @MaxLength(1000, {
    message: 'A descricao deve ter menos de 1000 caracteres',
  })
  descricao: string;
}
