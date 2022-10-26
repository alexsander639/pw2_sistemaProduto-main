import { User } from 'src/users/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: User): Promise<import("./models/user-token.model").UserToken>;
    getUser(user: any): any;
}
