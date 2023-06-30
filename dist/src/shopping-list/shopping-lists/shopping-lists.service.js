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
exports.ShoppingListsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shopping_lists_entity_1 = require("./entities/shopping-lists.entity");
const typeorm_2 = require("typeorm");
const shopping_list_item_entity_1 = require("../entities/shopping-list-item.entity");
let ShoppingListsService = exports.ShoppingListsService = class ShoppingListsService {
    constructor(shoppingListsRepository, shoppingListItemRepository) {
        this.shoppingListsRepository = shoppingListsRepository;
        this.shoppingListItemRepository = shoppingListItemRepository;
    }
    create(createShoppingListDto) {
        const newList = this.shoppingListsRepository.create();
        return this.shoppingListsRepository.save(newList);
    }
    findAll() {
        return this.shoppingListsRepository.find();
    }
    async getMyShoppingList(id) {
        const shoppingListItems = await this.shoppingListItemRepository
            .createQueryBuilder("shoppingListItem")
            .innerJoinAndSelect("shoppingListItem.shoppingList", "shoppingList")
            .where("shoppingList.id = :id", { id })
            .getMany();
        return shoppingListItems;
    }
    update(id, updateShoppingListDto) {
        return `This action updates a #${id} shoppingList`;
    }
    remove(id) {
        return `This action removes a #${id} shoppingList`;
    }
};
exports.ShoppingListsService = ShoppingListsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shopping_lists_entity_1.ShoppingLists)),
    __param(1, (0, typeorm_1.InjectRepository)(shopping_list_item_entity_1.ShoppingListItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ShoppingListsService);
//# sourceMappingURL=shopping-lists.service.js.map