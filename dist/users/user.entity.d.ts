import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    name: string;
    status: boolean;
    password?: string;
    hashPassword(): void;
}
