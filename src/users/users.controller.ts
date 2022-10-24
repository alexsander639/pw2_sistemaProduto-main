import { RolesGuard } from 'src/auth/guards/role.guard';
import { UpdateUserDto } from './dto/update-user-dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Query,
  DefaultValuePipe,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { IsPublic } from 'src/shared/decorators/is-public.decorator';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @IsPublic()
  @Post('criar')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('buscar')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin, Role.User)
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('search') search: string,
  ) {
    return this.usersService.findAll({ page, limit }, search);
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin, Role.User)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin, Role.User)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin, Role.User)
  //@HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
