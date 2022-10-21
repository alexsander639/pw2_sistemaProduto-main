import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from './produto.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions/record-not-found.exception';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>,
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    const produto = new Produto();
    produto.name = createProdutoDto.name;
    produto.marca = createProdutoDto.marca;
    produto.valor = createProdutoDto.valor;
    produto.descricao = createProdutoDto.descricao;
    produto.status = true;

    return this.repository.save(produto);
  }

  findAll(options: IPaginationOptions, search: string) {
    const where: FindOptionsWhere<Produto> = {};
    if (search) {
      where.name = ILike(`%${search}%`);
    }
    return paginate<Produto>(this.repository, options, { where });
  }

  async findOne(id: number) {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new RecordNotFoundException();
    }

    return user;
  }

  async remove(id: number) {
    const user = await this.repository.delete(id);

    if (!user?.affected) {
      throw new RecordNotFoundException();
    }
    return user;
  }
}
function ILike(arg0: string): string | import('typeorm').FindOperator<string> {
  throw new Error('Function not implemented.');
}
