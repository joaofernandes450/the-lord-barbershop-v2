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
    { image: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-2.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-3.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-4.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-5.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-6.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-7.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-8.jpg' },
    { image: 'https://swiperjs.com/demos/images/nature-10.jpg' },
  ];

  ngOnInit(): void {
    this.availableStores = STORES;
  }

  ngAfterViewInit(): void {
    if (this.swiperComponent) {
      this.swiperComponent.activeIndex = 2;
      this.swiperComponent.autoplay.start();
    }
  }
}
