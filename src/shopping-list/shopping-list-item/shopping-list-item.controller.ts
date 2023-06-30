import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ShoppingListService } from '../shopping-list.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateShoppingListItemDto } from '../dto/create-shopping-list-item.dto';

@ApiTags('shopping-list-item')
@Controller('shopping-list-item')
export class ShoppingListItemController {

  constructor(private shoppingListService: ShoppingListService) {
  }

  @Post('/create/:id')
  createShoppingListItem(@Param('id', ParseIntPipe) id: number, @Body() body: CreateShoppingListItemDto) {
    return this.shoppingListService.createItem(id, body);
  }

}
