import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(name?: string): Promise<User[]>;
    findById(id: number): Promise<User>;
    remove(id: number): Promise<User>;
    createUser(CreateUserDto: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: CreateUserDto): Promise<{
        name: string;
        somehting: string;
        id: number;
        new: string;
    } & User>;
}
