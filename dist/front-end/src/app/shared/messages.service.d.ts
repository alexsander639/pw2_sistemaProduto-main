import { MatSnackBar } from '@angular/material/snack-bar';
export declare class MessagesService {
    private readonly snackBar;
    constructor(snackBar: MatSnackBar);
    success(msg: string): void;
    error(msg: string): void;
}
