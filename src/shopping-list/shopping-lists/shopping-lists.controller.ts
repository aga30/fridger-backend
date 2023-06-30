import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ShoppingListsService } from './shopping-lists.service';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shopping-lists')
@Controller('shopping-lists')
export class ShoppingListsController {
  constructor(private readonly shoppingListsService: ShoppingListsService) { }

  @Post()
  create(@Body() createShoppingListDto: CreateShoppingListDto) {
    return this.shoppingListsService.create(createShoppingListDto);
  }

  @Get()
  findAll() {
    return this.shoppingListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.shoppingListsService.getMyShoppingList(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingListDto: UpdateShoppingListDto) {
    return this.shoppingListsService.update(+id, updateShoppingListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingListsService.remove(+id);
  }
}
