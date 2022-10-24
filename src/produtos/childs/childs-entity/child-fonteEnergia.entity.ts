/* eslint-disable prettier/prettier */
import { Column, ChildEntity } from 'typeorm';
import { Produto } from '../../produto.entity';

@ChildEntity()
export class FonteEnergia extends Produto {
  @Column({ nullable: false, type: 'varchar', length: 100 })
  voltagem: string;
}