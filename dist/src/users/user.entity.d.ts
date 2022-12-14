import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    name: string;
    role: string;
    password: string;
    hashPassword(): void;
}
