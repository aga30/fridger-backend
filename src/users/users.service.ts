import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {

  }


  findAll(name?: string) {

    return this.userRepository.find();
  }

  findById(id: number) {
    return this.userRepository.findOneBy({ id })
  }

  async remove(id: number) {
    const user = await this.findById(id);
    return this.userRepository.remove(user);
  }

  createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(CreateUserDto);

    return this.userRepository.save(newUser);
  }

  async update(id: number, updateUserDto: CreateUserDto) {
    const user = await this.findById(id);
    return this.userRepository.save({ ...user, ...updateUserDto });
  }

}
