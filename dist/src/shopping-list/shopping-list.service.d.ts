import { ShoppingList } from './entities/shopping-list.entity';
import { Repository } from 'typeorm';
import { ShoppingListItem } from './entities/shopping-list-item.entity';
import { CreateShoppingListItemDto } from './dto/create-shopping-list-item.dto';
export declare class ShoppingListService {
    private shoppingListRepository;
    private shoppingListItemRepository;
    constructor(shoppingListRepository: Repository<ShoppingList>, shoppingListItemRepository: Repository<ShoppingListItem>);
    create(): Promise<ShoppingList>;
    getMyShoppingList(id: number): Promise<ShoppingListItem[]>;
    findOne(id: number): Promise<ShoppingList>;
    remove(id: number): string;
    createItem(id: number, newItemData: Partial<CreateShoppingListItemDto>): Promise<ShoppingList[]>;
}
