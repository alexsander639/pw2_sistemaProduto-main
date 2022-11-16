import { CreateTecladoDto } from './childs/childs-dto/child-create-teclado.dto';
import { Teclado } from './childs/childs-entity/child-teclado.entity';
import { CreateRamDto } from './childs/childs-dto/child-create-ram.dto';
import { Ssd } from './childs/childs-entity/child-ssd.entity';
import { CreateProcessadorDto } from './childs/childs-dto/child-create-processador.dto';
import { CreateFonteEnergiaDto } from './childs/childs-dto/child-create-fonteEnergia.dto';
import { FonteEnergia } from './childs/childs-entity/child-fonteEnergia.entity';
import { CreateCoolerDto } from './childs/childs-dto/child-create-cooler.dto';
import { Headset } from './childs/childs-entity/child-headset.entity';
import { Monitor } from './childs/childs-entity/child-monitor.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from './produto.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { RecordNotFoundException } from '@exceptions/record-not-found.exception';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { CreateMonitorDto } from './childs/childs-dto/child-create-monitor.dto';
import { CreateHdDto } from './childs/childs-dto/child-create-hd.dto';
import { Hd } from './childs/childs-entity/child-hd.entity';
import { CreateHeadsetDto } from './childs/childs-dto/child-create-headset.dto';
import { Cooler } from './childs/childs-entity/child-cooler.entity';
import { Processador } from './childs/childs-entity/child-processador.entity';
import { CreateSsdDto } from './childs/childs-dto/child-create-ssd.dto';
import { Ram } from './childs/childs-entity/child-ram.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto) private readonly repository: Repository<Produto>,
    @InjectRepository(Monitor) private readonly repositoryMonitor: Repository<Monitor>,
    @InjectRepository(Hd) private readonly repositoryHd: Repository<Hd>,
    @InjectRepository(Cooler) private readonly repositoryCooler: Repository<Cooler>,
    @InjectRepository(Headset) private readonly repositoryHeadset: Repository<Headset>,
    @InjectRepository(FonteEnergia) private readonly repositoryFonteEnergia: Repository<FonteEnergia>,
    @InjectRepository(Processador) private readonly repositoryProcessador: Repository<Processador>,
    @InjectRepository(Ssd) private readonly repositorySsd: Repository<Ssd>,
    @InjectRepository(Ram) private readonly repositoryRam: Repository<Ram>,
    @InjectRepository(Teclado) private readonly repositoryTeclado: Repository<Teclado>,
  ) {}

  create(createProdutoDto: CreateProdutoDto) {
    let service;
    if(createProdutoDto instanceof CreateMonitorDto){
      service = this.repositoryMonitor;
    }else if(createProdutoDto instanceof CreateHdDto){
      service = this.repositoryHd;
    }else if(createProdutoDto instanceof CreateCoolerDto){
      service = this.repositoryCooler;
    }else if(createProdutoDto instanceof CreateHeadsetDto){
      service = this.repositoryHeadset;
    }else if(createProdutoDto instanceof CreateFonteEnergiaDto){
      service = this.repositoryFonteEnergia;
    }else if(createProdutoDto instanceof CreateProcessadorDto){
      service = this.repositoryProcessador;
    }else if(createProdutoDto instanceof CreateSsdDto){
      service = this.repositorySsd;
    }else if(createProdutoDto instanceof CreateRamDto){
      service = this.repositoryRam;
    }else if(createProdutoDto instanceof CreateTecladoDto){
      service = this.repositoryTeclado;
    }else{
      service = this.repository;
    }

    const produto = service.create(createProdutoDto);

    return service.save(produto);
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<Produto>> {
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

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    await this.repository.update(id, updateProdutoDto);
    const produto = await this.repository.findOneBy({ id });
    if (!produto) {
      throw new RecordNotFoundException();
    }

    return produto;
  }

  async remove(id: number) {
    const user = await this.repository.delete(id);

    if (!user?.affected) {
      throw new RecordNotFoundException();
    }
    return user;
  }
}
