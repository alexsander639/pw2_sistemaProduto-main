import { UpdateUserDto } from './dto/update-user-dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./user.entity").User, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: number): Promise<import("./user.entity").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("./user.entity").User>;
    remove(id: number): Promise<boolean>;
}
