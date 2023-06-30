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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListItem = void 0;
const typeorm_1 = require("typeorm");
const shopping_list_entity_1 = require("./shopping-list.entity");
let ShoppingListItem = exports.ShoppingListItem = class ShoppingListItem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ShoppingListItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShoppingListItem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShoppingListItem.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShoppingListItem.prototype, "amountType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShoppingListItem.prototype, "placeToBuy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShoppingListItem.prototype, "specifications", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], ShoppingListItem.prototype, "urgent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShoppingListItem.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ShoppingListItem.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shopping_list_entity_1.ShoppingList, shoppingList => shoppingList.itemId),
    __metadata("design:type", shopping_list_entity_1.ShoppingList)
], ShoppingListItem.prototype, "shoppingList", void 0);
exports.ShoppingListItem = ShoppingListItem = __decorate([
    (0, typeorm_1.Entity)()
], ShoppingListItem);
//# sourceMappingURL=shopping-list-item.entity.js.map