import { Teclado } from './childs/childs-entity/child-teclado.entity';
import { Ram } from './childs/childs-entity/child-ram.entity';
import { Headset } from './childs/childs-entity/child-headset.entity';
import { Cooler } from './childs/childs-entity/child-cooler.entity';
import { Monitor } from './childs/childs-entity/child-monitor.entity';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Hd } from './childs/childs-entity/child-hd.entity';
import { FonteEnergia } from './childs/childs-entity/child-fonteEnergia.entity';
import { Processador } from './childs/childs-entity/child-processador.entity';
import { Ssd } from './childs/childs-entity/child-ssd.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Monitor, Hd, Cooler, Headset, FonteEnergia, Processador, Ssd, Ram, Teclado]), UsersModule],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}
