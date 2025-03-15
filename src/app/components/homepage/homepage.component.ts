import { CommonModule } from '@angular/common';
import {
  afterNextRender,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Store, STORES } from '../../models/store';
import {
  beardServices,
  beautyServices,
  StoreService,
} from '../../models/store-service';
import { ReservationDialogComponent } from '../reservation-dialog/reservation-dialog.component';
import { ServicesSwiperComponent } from '../services-swiper/services-swiper.component';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, ServicesSwiperComponent, MatButtonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomepageComponent implements OnInit {
  private dialog = inject(MatDialog);

  @ViewChild('swiperContainer')
  swiperRef: ElementRef | undefined;

  availableStores: Store[] = [];

  slides = [
    { image: 'assets/slider/1.png' },
    { image: 'assets/slider/2.png' },
    { image: 'assets/slider/3.png' },
    { image: 'assets/slider/4.png' },
    { image: 'assets/slider/5.png' },
    { image: 'assets/slider/6.png' },
    { image: 'assets/slider/7.png' },
    { image: 'assets/slider/8.png' },
    { image: 'assets/slider/9.png' },
    { image: 'assets/slider/10.png' },
    { image: 'assets/slider/11.png' },
    { image: 'assets/slider/12.png' },
    { image: 'assets/slider/13.png' },
    { image: 'assets/slider/14.png' },
    { image: 'assets/slider/15.png' },
    { image: 'assets/slider/16.png' },
  ];

  beardServices: StoreService[] = beardServices;
  beautyServices: StoreService[] = beautyServices;

  constructor() {
    afterNextRender(() => {
      if (this.swiperRef) {
        this.swiperRef.nativeElement.initialize();
      }
    });
  }

  ngOnInit(): void {
    this.availableStores = STORES;
  }

  openReservations(): void {
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      panelClass: 'book-iframe-dialog',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }
}
