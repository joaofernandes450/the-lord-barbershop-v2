import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import SwiperComponent from 'swiper/core';
import { StoreService } from '../../models/store-service';

@Component({
  selector: 'app-services-swiper',
  imports: [],
  templateUrl: './services-swiper.component.html',
  styleUrl: './services-swiper.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesSwiperComponent {
  @Input() services: StoreService[] = [];
}
