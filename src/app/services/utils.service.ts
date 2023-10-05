import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public constructor(
    public readonly snackBar: MatSnackBar,
    public readonly router: Router
  ) {}

  public showSnackBarSucess(msg: string) {
    return this.snackBar.open(msg, 'x', {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: 'snack-bar-sucess',
    });
  }

  public showSnackBarError(msg: string) {
    const snackBarConfig: MatSnackBarConfig<any> = {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snack-bar-error'],
    };

    return this.snackBar.open(msg, 'x', snackBarConfig);
  }
}
