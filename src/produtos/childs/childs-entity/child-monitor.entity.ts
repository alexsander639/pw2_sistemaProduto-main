/* eslint-disable prettier/prettier */
import { Column, ChildEntity } from 'typeorm';
import { Produto } from '../../produto.entity';

@ChildEntity()
export class Monitor extends Produto {
  @Column({ nullable: false, type: 'varchar', length: 200 })
  polegadas: string;
}
