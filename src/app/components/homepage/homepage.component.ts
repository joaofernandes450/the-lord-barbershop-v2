import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store, STORES } from '../../models/store';
import { CommonModule } from '@angular/common';
import SwiperComponent from 'swiper/core';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomepageComponent implements OnInit, AfterViewInit {
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

  ngOnInit(): void {
    this.availableStores = STORES;
  }

  ngAfterViewInit(): void {
    if (this.swiperComponent) {
      // this.swiperComponent.activeIndex = 2;
      // this.swiperComponent.autoplay.start();
    }
  }
}
