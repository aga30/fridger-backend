import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingList } from "./shopping-list.entity";

@Entity()
export class ShoppingListItem {

  @PrimaryGeneratedColumn()
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  amount: string;
  @Column()
  amountType: string;
  @Column()
  placeToBuy: string;
  @Column()
  specifications: string;
  @Column()
  urgent: boolean;
  @Column()
  price: string
  @Column()
  currency: string
  @ManyToOne(() => ShoppingList, shoppingList => shoppingList.itemId)
  shoppingList: ShoppingList;
}

