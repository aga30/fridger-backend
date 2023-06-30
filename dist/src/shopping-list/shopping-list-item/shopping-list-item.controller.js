"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListItemController = void 0;
const common_1 = require("@nestjs/common");
const shopping_list_service_1 = require("../shopping-list.service");
const swagger_1 = require("@nestjs/swagger");
const create_shopping_list_item_dto_1 = require("../dto/create-shopping-list-item.dto");
let ShoppingListItemController = exports.ShoppingListItemController = class ShoppingListItemController {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    createShoppingListItem(id, body) {
        return this.shoppingListService.createItem(id, body);
    }
};
__decorate([
    (0, common_1.Post)('/create/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_shopping_list_item_dto_1.CreateShoppingListItemDto]),
    __metadata("design:returntype", void 0)
], ShoppingListItemController.prototype, "createShoppingListItem", null);
exports.ShoppingListItemController = ShoppingListItemController = __decorate([
    (0, swagger_1.ApiTags)('shopping-list-item'),
    (0, common_1.Controller)('shopping-list-item'),
    __metadata("design:paramtypes", [shopping_list_service_1.ShoppingListService])
], ShoppingListItemController);
//# sourceMappingURL=shopping-list-item.controller.js.map