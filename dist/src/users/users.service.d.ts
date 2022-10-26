import { UpdateUserDto } from './dto/update-user-dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class UsersService {
    private readonly repository;
    static findByEmail(email: string, arg1: boolean): void;
    constructor(repository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(options: IPaginationOptions, search?: string): Promise<Pagination<User>>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string, includePassowrd?: boolean): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<boolean>;
}
