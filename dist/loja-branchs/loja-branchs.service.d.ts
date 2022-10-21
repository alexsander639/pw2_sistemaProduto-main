import { Repository } from 'typeorm';
import { CreateLojaBranchDto } from './dto/create-loja-branch.dto';
import { UpdateLojaBranchDto } from './dto/update-loja-branch.dto';
import { LojaBranch } from './entities/loja-branch.entity';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class LojaBranchsService {
    private repository;
    constructor(repository: Repository<LojaBranch>);
    create(createLojaBranchDto: CreateLojaBranchDto): Promise<LojaBranch>;
    findAll(options: IPaginationOptions, search?: string): Promise<Pagination<LojaBranch>>;
    findOne(id: number): Promise<LojaBranch>;
    update(id: number, updateLojaBranchDto: UpdateLojaBranchDto): Promise<LojaBranch>;
    remove(id: number): Promise<boolean>;
}
