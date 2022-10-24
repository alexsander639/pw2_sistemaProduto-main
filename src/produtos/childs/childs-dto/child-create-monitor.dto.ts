/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateProdutoDto } from 'src/produtos/dto/create-produto.dto';

export class CreateMonitorDto extends CreateProdutoDto{
  /**
    * Informação sobre a quantidade de polegadas do Monitor
    * @example 
    */
  @IsNotEmpty({
    message: 'Informe as polegadas do produto',
  })
  @MaxLength(200, {
    message: 'O texto deve ter menos de 200 caracteres',
  })
  polegadas: string;

}
