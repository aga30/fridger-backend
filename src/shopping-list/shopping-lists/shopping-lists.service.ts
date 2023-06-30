import { Injectable } from '@nestjs/common';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingLists } from './entities/shopping-lists.entity';
import { Repository, getRepository } from 'typeorm';
import { ShoppingListItem } from '../entities/shopping-list-item.entity';

@Injectable()
export class ShoppingListsService {

  constructor(
    @InjectRepository(ShoppingLists) private shoppingListsRepository: Repository<ShoppingLists>,
    @InjectRepository(ShoppingListItem) private shoppingListItemRepository: Repository<ShoppingListItem>
  ) {

  }

  create(createShoppingListDto: CreateShoppingListDto) {
    const newList = this.shoppingListsRepository.create()
    return this.shoppingListsRepository.save(newList);
  }

  findAll() {
    return this.shoppingListsRepository.find();
  }

  async getMyShoppingList(id: number) {
    const shoppingListItems = await this.shoppingListItemRepository
      .createQueryBuilder("shoppingListItem")
      .innerJoinAndSelect("shoppingListItem.shoppingList", "shoppingList")
      .where("shoppingList.id = :id", { id })
      .getMany();

    return shoppingListItems;
  }

  update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    return `This action updates a #${id} shoppingList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingList`;
  }
}
