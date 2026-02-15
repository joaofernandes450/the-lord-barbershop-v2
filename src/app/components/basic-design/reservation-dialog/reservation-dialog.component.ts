import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './reservation-dialog.component.html',
  styleUrl: './reservation-dialog.component.scss',
  standalone: true,
})
export class ReservationDialogComponent {}
