import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    ShoppingListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
