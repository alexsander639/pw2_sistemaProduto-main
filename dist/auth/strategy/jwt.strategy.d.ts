import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { UserPayload } from '../models/user-payload.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: UserPayload): Promise<any>;
}
export {};
