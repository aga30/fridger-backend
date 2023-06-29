import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(name: string): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(body: CreateUserDto): Promise<User>;
    updateUser(id: number, body: CreateUserDto): Promise<{
        name: string;
        somehting: string;
        id: number;
        new: string;
    } & User>;
    deleteUser(id: number): Promise<User>;
}
