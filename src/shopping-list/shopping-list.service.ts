import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingList } from './entities/shopping-list.entity';
import { Repository } from 'typeorm';
import { ShoppingListItem } from './entities/shopping-list-item.entity';
import { CreateShoppingListItemDto } from './dto/create-shopping-list-item.dto';

@Injectable()
export class ShoppingListService {

  constructor(
    @InjectRepository(ShoppingList) private shoppingListRepository: Repository<ShoppingList>,
    @InjectRepository(ShoppingListItem) private shoppingListItemRepository: Repository<ShoppingListItem>,
  ) { }

  create() {
    const newShoppingList = this.shoppingListRepository.create();
    return this.shoppingListRepository.save(newShoppingList)
  }

  async getMyShoppingList(id: number) {
    const shoppingListItems = (await this.shoppingListRepository.findBy({ id })).map(x => x.itemId);
    let a = (await this.shoppingListItemRepository.find())
    a = a.filter(a => shoppingListItems.find(x => x === a.id));
    console.log(a)
    return a;
  }

  async findOne(id: number) {
    let a = await this.shoppingListRepository.find()
    let list = await this.shoppingListRepository.findOneBy({ id });
    return list;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingList`;
  }

  async createItem(id: number, newItemData: Partial<CreateShoppingListItemDto>) {
    const createdItem = await this.shoppingListItemRepository.create(newItemData);
    await this.shoppingListItemRepository.save(createdItem);
    let createdListItem = await this.shoppingListRepository.create({ id: id, itemId: createdItem.id });
    this.shoppingListRepository.save(createdListItem);
    const toReturn = this.shoppingListRepository.findBy({ id });
    return toReturn

  }
}
