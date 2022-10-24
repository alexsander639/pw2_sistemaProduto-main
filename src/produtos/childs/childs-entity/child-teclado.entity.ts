/* eslint-disable prettier/prettier */
import { Column, ChildEntity } from 'typeorm';
import { Produto } from '../../produto.entity';

@ChildEntity()
export class Teclado extends Produto {
  @Column({ nullable: false, type: 'boolean' })
  rgb: boolean;

  @Column({ nullable: false, type: 'boolean' })
  mecanico: boolean;
}