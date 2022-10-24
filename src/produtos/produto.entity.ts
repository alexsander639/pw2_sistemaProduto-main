/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
} from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "tipo" } })
export class Produto extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: "varchar", length: 200 })
  name: string;

  @Column({ nullable: false, type: "varchar", length: 200 })
  marca: string;

  @Column({ nullable: false, default: true })
  status: boolean;

  @Column({ nullable: false, type: "double" })
  valor: number;

  @Column({ nullable: false, type: "varchar", length: 1000 })
  descricao: string;
}
