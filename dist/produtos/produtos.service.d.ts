import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from './produto.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
export declare class ProdutosService {
    private readonly repository;
    constructor(repository: Repository<Produto>);
    create(createProdutoDto: CreateProdutoDto): Promise<Produto>;
    findAll(options: IPaginationOptions, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<Produto, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: number): Promise<Produto>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
