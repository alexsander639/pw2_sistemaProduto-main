export declare class StorageService {
    private ls;
    private prefix;
    clear(): void;
    remove(key: string): void;
    set(key: string, value: any, seconds?: number): void;
    get(key: string): any;
    isExpired(key: string): boolean;
}
