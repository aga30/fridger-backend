import { ShoppingList } from "./shopping-list.entity";
export declare class ShoppingListItem {
    id: number;
    name: string;
    amount: string;
    amountType: string;
    placeToBuy: string;
    specifications: string;
    urgent: boolean;
    price: string;
    currency: string;
    shoppingList: ShoppingList;
}
