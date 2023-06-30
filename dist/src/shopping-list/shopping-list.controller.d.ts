import { ShoppingListService } from './shopping-list.service';
export declare class ShoppingListController {
    private readonly shoppingListService;
    constructor(shoppingListService: ShoppingListService);
    create(): Promise<import("./entities/shopping-list.entity").ShoppingList>;
    getShoppingList(): any;
    findOne(id: number): Promise<import("./entities/shopping-list-item.entity").ShoppingListItem[]>;
    remove(id: string): string;
}
