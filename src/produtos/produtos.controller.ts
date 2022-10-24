import { CreateProdutoDto } from './dto/create-produto.dto';
import { CreateTecladoDto } from './childs/childs-dto/child-create-teclado.dto';
import { CreateRamDto } from './childs/childs-dto/child-create-ram.dto';
import { CreateProcessadorDto } from './childs/childs-dto/child-create-processador.dto';
import { CreateFonteEnergiaDto } from './childs/childs-dto/child-create-fonteEnergia.dto';
import { CreateHeadsetDto } from './childs/childs-dto/child-create-headset.dto';
import { CreateCoolerDto } from './childs/childs-dto/child-create-cooler.dto';
import { ProdutosService } from './produtos.service';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { ApiTags } from '@nestjs/swagger';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { IsPublic } from 'src/shared/decorators/is-public.decorator';
import { CreateMonitorDto } from './childs/childs-dto/child-create-monitor.dto';
import { CreateHdDto } from './childs/childs-dto/child-create-hd.dto';
import { CreateSsdDto } from './childs/childs-dto/child-create-ssd.dto';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Post('criar')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createProduto(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtosService.create(createProdutoDto);
  }

  @Post('criar/monitor')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createMonitor(@Body() createMonitorDto: CreateMonitorDto) {
    return this.produtosService.create(createMonitorDto);
  }

  @Post('criar/hd')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createHd(@Body() createHdDto: CreateHdDto) {
    return this.produtosService.create(createHdDto);
  }

  @Post('criar/cooler')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createCooler(@Body() createHdDto: CreateCoolerDto) {
    return this.produtosService.create(createHdDto);
  }

  @Post('criar/headset')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createHeadset(@Body() createHdDto: CreateHeadsetDto) {
    return this.produtosService.create(createHdDto);
  }

  @Post('criar/fonte-energia')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createFonteEnergia(@Body() createFonteEnergiaDto: CreateFonteEnergiaDto) {
    return this.produtosService.create(createFonteEnergiaDto);
  }

  @Post('criar/processador')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createProcessador(@Body() createProcessadorDto: CreateProcessadorDto) {
    return this.produtosService.create(createProcessadorDto);
  }

  @Post('criar/ssd')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createSsd(@Body() createSsdDto: CreateSsdDto) {
    return this.produtosService.create(createSsdDto);
  }

  @Post('criar/ram')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createRam(@Body() createRamDto: CreateRamDto) {
    return this.produtosService.create(createRamDto);
  }

  @Post('criar/teclado')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  createTeclado(@Body() createTecladoDto: CreateTecladoDto) {
    return this.produtosService.create(createTecladoDto);
  }

  @IsPublic()
  @Get('buscar')
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('search') search: string,
  ) {
    return this.produtosService.findAll({ page, limit }, search);
  }

  @IsPublic()
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProdutoDto: UpdateProdutoDto,
  ) {
    return this.produtosService.update(id, updateProdutoDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.produtosService.remove(id);
  }
}
