import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingLists } from './entities/shopping-lists.entity';
import { Repository } from 'typeorm';
import { ShoppingListItem } from '../entities/shopping-list-item.entity';
export declare class ShoppingListsService {
    private shoppingListsRepository;
    private shoppingListItemRepository;
    constructor(shoppingListsRepository: Repository<ShoppingLists>, shoppingListItemRepository: Repository<ShoppingListItem>);
    create(createShoppingListDto: CreateShoppingListDto): Promise<ShoppingLists>;
    findAll(): Promise<ShoppingLists[]>;
    getMyShoppingList(id: number): Promise<ShoppingListItem[]>;
    update(id: number, updateShoppingListDto: UpdateShoppingListDto): string;
    remove(id: number): string;
}
