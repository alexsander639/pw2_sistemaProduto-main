/* eslint-disable prettier/prettier */
import { Column, ChildEntity } from 'typeorm';
import { Produto } from '../../produto.entity';

@ChildEntity()
export class Processador extends Produto {
  @Column({ nullable: false, type: 'double'})
  gigahertz: number;

  @Column({ nullable: false, type: 'double'})
  cache: number;
}