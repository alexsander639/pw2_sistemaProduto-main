/* eslint-disable prettier/prettier */
import { Column, ChildEntity } from 'typeorm';
import { Produto } from '../../produto.entity';

@ChildEntity()
export class Cooler extends Produto {
  @Column({ nullable: false, type: 'boolean' })
  rgb: boolean;
}