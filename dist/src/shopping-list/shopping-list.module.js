"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListModule = void 0;
const common_1 = require("@nestjs/common");
const shopping_list_service_1 = require("./shopping-list.service");
const shopping_list_controller_1 = require("./shopping-list.controller");
const shopping_list_entity_1 = require("./entities/shopping-list.entity");
const shopping_list_item_entity_1 = require("./entities/shopping-list-item.entity");
const typeorm_1 = require("@nestjs/typeorm");
const shopping_list_item_controller_1 = require("./shopping-list-item/shopping-list-item.controller");
const shopping_lists_module_1 = require("./shopping-lists/shopping-lists.module");
let ShoppingListModule = exports.ShoppingListModule = class ShoppingListModule {
};
exports.ShoppingListModule = ShoppingListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shopping_list_entity_1.ShoppingList, shopping_list_item_entity_1.ShoppingListItem]), shopping_lists_module_1.ShoppingListsModule],
        controllers: [shopping_list_controller_1.ShoppingListController, shopping_list_item_controller_1.ShoppingListItemController],
        providers: [shopping_list_service_1.ShoppingListService]
    })
], ShoppingListModule);
//# sourceMappingURL=shopping-list.module.js.map