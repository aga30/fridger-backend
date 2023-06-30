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
exports.ShoppingListController = void 0;
const common_1 = require("@nestjs/common");
const shopping_list_service_1 = require("./shopping-list.service");
const swagger_1 = require("@nestjs/swagger");
let ShoppingListController = exports.ShoppingListController = class ShoppingListController {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
    }
    create() {
        return this.shoppingListService.create();
    }
    getShoppingList() {
        return null;
    }
    findOne(id) {
        return this.shoppingListService.getMyShoppingList(id);
    }
    remove(id) {
        return this.shoppingListService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShoppingListController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShoppingListController.prototype, "getShoppingList", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShoppingListController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingListController.prototype, "remove", null);
exports.ShoppingListController = ShoppingListController = __decorate([
    (0, swagger_1.ApiTags)('shopping-list'),
    (0, common_1.Controller)('shopping-list'),
    __metadata("design:paramtypes", [shopping_list_service_1.ShoppingListService])
], ShoppingListController);
//# sourceMappingURL=shopping-list.controller.js.map