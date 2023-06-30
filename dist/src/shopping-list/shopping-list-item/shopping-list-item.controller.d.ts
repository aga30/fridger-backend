import { ShoppingListService } from '../shopping-list.service';
import { CreateShoppingListItemDto } from '../dto/create-shopping-list-item.dto';
export declare class ShoppingListItemController {
    private shoppingListService;
    constructor(shoppingListService: ShoppingListService);
    createShoppingListItem(id: number, body: CreateShoppingListItemDto): Promise<import("../entities/shopping-list.entity").ShoppingList[]>;
}
