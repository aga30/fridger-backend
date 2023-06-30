"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShoppingListDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_shopping_list_dto_1 = require("./create-shopping-list.dto");
class UpdateShoppingListDto extends (0, mapped_types_1.PartialType)(create_shopping_list_dto_1.CreateShoppingListDto) {
}
exports.UpdateShoppingListDto = UpdateShoppingListDto;
//# sourceMappingURL=update-shopping-list.dto.js.map