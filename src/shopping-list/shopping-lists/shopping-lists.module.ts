import { Module } from '@nestjs/common';
import { ShoppingListsService } from './shopping-lists.service';
import { ShoppingListsController } from './shopping-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingLists } from './entities/shopping-lists.entity';
import { ShoppingListItem } from '../entities/shopping-list-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingLists, ShoppingListItem])],
  controllers: [ShoppingListsController],
  providers: [ShoppingListsService]
})
export class ShoppingListsModule { }
