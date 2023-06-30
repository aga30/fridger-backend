import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shopping-list')
@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) { }

  @Post()
  create() {
    return this.shoppingListService.create();
  }

  @Get()
  getShoppingList() {
    return null
    // this.shoppingListService.getShoppingList(id);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.shoppingListService.getMyShoppingList(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingListService.remove(+id);
  }
}
