import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reusable-header',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './reusable-header.component.html',
  styleUrl: './reusable-header.component.scss',
  standalone: true,
})
export class ReusableHeaderComponent {
  private reservationService = inject(ReservationService);

  openReservations(): void {
    this.reservationService.openReservations();
  }
}
