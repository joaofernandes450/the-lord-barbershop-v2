import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationDialogComponent } from '../components/reservation-dialog/reservation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private dialog = inject(MatDialog);

  openReservations(): void {
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      panelClass: 'book-iframe-dialog',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }
}
