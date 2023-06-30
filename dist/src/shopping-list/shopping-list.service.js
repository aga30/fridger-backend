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
exports.ShoppingListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shopping_list_entity_1 = require("./entities/shopping-list.entity");
const typeorm_2 = require("typeorm");
const shopping_list_item_entity_1 = require("./entities/shopping-list-item.entity");
let ShoppingListService = exports.ShoppingListService = class ShoppingListService {
    constructor(shoppingListRepository, shoppingListItemRepository) {
        this.shoppingListRepository = shoppingListRepository;
        this.shoppingListItemRepository = shoppingListItemRepository;
    }
    create() {
        const newShoppingList = this.shoppingListRepository.create();
        return this.shoppingListRepository.save(newShoppingList);
    }
    async getMyShoppingList(id) {
        const shoppingListItems = (await this.shoppingListRepository.findBy({ id })).map(x => x.itemId);
        let a = (await this.shoppingListItemRepository.find());
        a = a.filter(a => shoppingListItems.find(x => x === a.id));
        console.log(a);
        return a;
    }
    async findOne(id) {
        let a = await this.shoppingListRepository.find();
        let list = await this.shoppingListRepository.findOneBy({ id });
        return list;
    }
    remove(id) {
        return `This action removes a #${id} shoppingList`;
    }
    async createItem(id, newItemData) {
        const createdItem = await this.shoppingListItemRepository.create(newItemData);
        await this.shoppingListItemRepository.save(createdItem);
        let createdListItem = await this.shoppingListRepository.create({ id: id, itemId: createdItem.id });
        this.shoppingListRepository.save(createdListItem);
        const toReturn = this.shoppingListRepository.findBy({ id });
        return toReturn;
    }
};
exports.ShoppingListService = ShoppingListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shopping_list_entity_1.ShoppingList)),
    __param(1, (0, typeorm_1.InjectRepository)(shopping_list_item_entity_1.ShoppingListItem)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ShoppingListService);
//# sourceMappingURL=shopping-list.service.js.map