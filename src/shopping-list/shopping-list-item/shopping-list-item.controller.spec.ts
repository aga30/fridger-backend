import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListItemController } from './shopping-list-item.controller';

describe('ShoppingListItemController', () => {
  let controller: ShoppingListItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingListItemController],
    }).compile();

    controller = module.get<ShoppingListItemController>(ShoppingListItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
