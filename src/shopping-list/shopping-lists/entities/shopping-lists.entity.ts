import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ShoppingLists {

  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: number
}
