import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, shareReplay } from 'rxjs';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly reservationService = inject(ReservationService);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  showMobileContent = false;

  openReservationsDialog(): void {
    this.scrollToItem('bookings');
    setTimeout(() => {
      this.reservationService.openMinimalistReservations();
    }, 500);
  }

  scrollToItem(elementId: string): void {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
