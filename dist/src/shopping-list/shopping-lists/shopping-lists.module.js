"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListsModule = void 0;
const common_1 = require("@nestjs/common");
const shopping_lists_service_1 = require("./shopping-lists.service");
const shopping_lists_controller_1 = require("./shopping-lists.controller");
const typeorm_1 = require("@nestjs/typeorm");
const shopping_lists_entity_1 = require("./entities/shopping-lists.entity");
const shopping_list_item_entity_1 = require("../entities/shopping-list-item.entity");
let ShoppingListsModule = exports.ShoppingListsModule = class ShoppingListsModule {
};
exports.ShoppingListsModule = ShoppingListsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shopping_lists_entity_1.ShoppingLists, shopping_list_item_entity_1.ShoppingListItem])],
        controllers: [shopping_lists_controller_1.ShoppingListsController],
        providers: [shopping_lists_service_1.ShoppingListsService]
    })
], ShoppingListsModule);
//# sourceMappingURL=shopping-lists.module.js.map