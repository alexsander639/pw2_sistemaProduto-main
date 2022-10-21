import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserPayload } from './models/user-payload.model';
import { UserToken } from './models/user-token.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findByEmail(email, true);

    if (user) {
      const isPasswordValid = await compareSync(pass, user.password);
      if (isPasswordValid) {
        const { password, ...result } = user;
        return result as User;
      }
    }

    return null;
  }

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    return {
      access_token: this.jwtService.sign(payload),
      token_type: 'Bearer',
    };
  }
}
