import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListController } from './shopping-list.controller';
import { ShoppingList } from './entities/shopping-list.entity';
import { ShoppingListItem } from './entities/shopping-list-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingListItemController } from './shopping-list-item/shopping-list-item.controller';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingList, ShoppingListItem]), ShoppingListsModule],
  controllers: [ShoppingListController, ShoppingListItemController],
  providers: [ShoppingListService]
})
export class ShoppingListModule { }
