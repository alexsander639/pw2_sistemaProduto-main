import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutosService],
  controllers: [ProdutosController],
})
export class ProdutosModule {}
