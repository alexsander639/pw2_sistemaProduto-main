import { CreateLojaBranchDto } from './create-loja-branch.dto';
declare const UpdateLojaBranchDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateLojaBranchDto>>;
export declare class UpdateLojaBranchDto extends UpdateLojaBranchDto_base {
    isActive?: boolean;
}
export {};
