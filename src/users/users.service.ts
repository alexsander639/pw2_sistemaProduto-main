import { UpdateUserDto } from './dto/update-user-dto';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { RecordNotFoundException } from '@exceptions/record-not-found.exception';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersService {
  static findByEmail(email: string, arg1: boolean) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.repository.create(createUserDto);
    const { password, ...result } = await this.repository.save(user);
    return result as User;
  }

  findAll(
    options: IPaginationOptions,
    search?: string,
  ): Promise<Pagination<User>> {
    const where: FindOptionsWhere<User> = {};
    if (search) {
      where.name = ILike(`%${search}%`);
    }

    return paginate<User>(this.repository, options, { where });
  }

  async findOne(id: number): Promise<User> {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new RecordNotFoundException();
    }

    return user;
  }

  async findByEmail(email: string, includePassowrd = false): Promise<User> {
    const user = await this.repository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne();

    if (includePassowrd) {
      return user;
    } else {
      const { password, ...result } = user;
      return result as User;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.repository.update(id, updateUserDto);
    const user = await this.repository.findOneBy({ id });
    if (!user) {
      throw new RecordNotFoundException();
    }

    return user;
  }

  async remove(id: number): Promise<boolean> {
    const user = await this.repository.delete(id);

    if (!user?.affected) {
      throw new RecordNotFoundException();
    }

    return true;
  }
}
function ILike(arg0: string): string | import('typeorm').FindOperator<string> {
  throw new Error('Function not implemented.');
}
