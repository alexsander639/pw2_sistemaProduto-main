import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutosController {
    private produtosService;
    constructor(produtosService: ProdutosService);
    create(createProdutoDto: CreateProdutoDto): Promise<import("./produto.entity").Produto>;
    findAll(page: number, limit: number, search: string): Promise<import("nestjs-typeorm-paginate").Pagination<import("./produto.entity").Produto, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: number): Promise<import("./produto.entity").Produto>;
    update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<import("./produto.entity").Produto>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
