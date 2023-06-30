import { ApiProperty } from "@nestjs/swagger";

export class CreateShoppingListItemDto {

  @ApiProperty()
  name: string;

  @ApiProperty()
  amount: string;

  @ApiProperty()
  amountType: string;

  @ApiProperty()
  placeToBuy: string;

  @ApiProperty()
  specifications: string;

  @ApiProperty()
  urgent: boolean;

  @ApiProperty()
  price: string;

  @ApiProperty()
  currency: string;

}

