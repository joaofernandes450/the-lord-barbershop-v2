import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import SwiperComponent from 'swiper/core';
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
export class HomepageComponent implements OnInit, AfterViewInit {
  private dialog = inject(MatDialog);

  @ViewChild('swiperComponent') swiperComponent?: SwiperComponent;

  availableStores: Store[] = [];

  slides = [
    { image: 'assets/slider/0.jpg' },
    { image: 'assets/slider/1.jpg' },
    { image: 'assets/slider/2.jpg' },
    { image: 'assets/slider/3.jpg' },
    { image: 'assets/slider/4.jpg' },
    { image: 'assets/slider/5.jpg' },
    { image: 'assets/slider/6.jpg' },
    { image: 'assets/slider/7.jpg' },
    { image: 'assets/slider/8.jpg' },
    { image: 'assets/slider/9.jpg' },
    { image: 'assets/slider/10.jpg' },
    { image: 'assets/slider/11.jpg' },
    { image: 'assets/slider/12.jpg' },
    { image: 'assets/slider/13.jpg' },
    { image: 'assets/slider/14.jpg' },
    { image: 'assets/slider/15.jpg' },
  ];

  beardServices: StoreService[] = beardServices;
  beautyServices: StoreService[] = beautyServices;

  ngOnInit(): void {
    this.availableStores = STORES;
  }

  ngAfterViewInit(): void {
    if (this.swiperComponent) {
      // this.swiperComponent.activeIndex = 2;
      // this.swiperComponent.autoplay.start();
    }
  }

  openReservations(): void {
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      panelClass: 'book-iframe-dialog',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  teste() {
    window.alert('1');
  }
}
