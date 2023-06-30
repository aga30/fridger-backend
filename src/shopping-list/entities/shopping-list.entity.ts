import { Entity, PrimaryGeneratedColumn, OneToMany, Column, PrimaryColumn } from "typeorm";

@Entity()
export class ShoppingList {
  @PrimaryColumn()
  id: number;

  @PrimaryColumn()
  itemId: number
}