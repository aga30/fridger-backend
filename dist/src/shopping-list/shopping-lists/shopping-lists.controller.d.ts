import { ShoppingListsService } from './shopping-lists.service';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
export declare class ShoppingListsController {
    private readonly shoppingListsService;
    constructor(shoppingListsService: ShoppingListsService);
    create(createShoppingListDto: CreateShoppingListDto): Promise<import("./entities/shopping-lists.entity").ShoppingLists>;
    findAll(): Promise<import("./entities/shopping-lists.entity").ShoppingLists[]>;
    findOne(id: number): Promise<import("../entities/shopping-list-item.entity").ShoppingListItem[]>;
    update(id: string, updateShoppingListDto: UpdateShoppingListDto): string;
    remove(id: string): string;
}
