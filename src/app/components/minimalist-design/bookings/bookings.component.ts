import { Component, inject } from '@angular/core';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-bookings',
  imports: [],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss',
})
export class BookingsComponent {
  readonly reservationService = inject(ReservationService);
}
