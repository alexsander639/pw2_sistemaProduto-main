/* eslint-disable prettier/prettier */
import { Column, ChildEntity } from 'typeorm';
import { Produto } from '../../produto.entity';

@ChildEntity()
export class Headset extends Produto {
  @Column({ nullable: false, type: 'varchar', length: 100 })
  tipo: string;
}
