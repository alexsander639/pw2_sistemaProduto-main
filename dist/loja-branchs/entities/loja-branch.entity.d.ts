import { BaseEntity } from 'typeorm';
export declare class LojaBranch extends BaseEntity {
    id: number;
    name: string;
    code: number;
    isActive: boolean;
    dateCreated: Date;
    lastUpdated: Date;
}
