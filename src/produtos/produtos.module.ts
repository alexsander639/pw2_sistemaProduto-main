import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { Produto } from './produto.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), UsersModule],
  providers: [ProdutosService],
  controllers: [ProdutosController],
  //exports: [ProdutosService],
})
export class ProdutosModule {}
