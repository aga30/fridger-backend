import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  @ApiQuery({ name: 'name', required: false })
  getUsers(@Query('name') name: string) {
    return this.usersService.findAll(name);
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  @ApiNotFoundResponse()
  getUserById(@Param('id', ParseIntPipe) id: number) {

    const user = this.usersService.findById(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  @ApiCreatedResponse({ type: User, description: 'the user' })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  @ApiCreatedResponse({ type: User, description: 'update' })
  @ApiBadRequestResponse()
  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() body: CreateUserDto) {
    return this.usersService.update(id, body);
  }

  @ApiCreatedResponse({ type: User, description: 'update' })
  @ApiBadRequestResponse()
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }



}
