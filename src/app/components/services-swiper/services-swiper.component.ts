import {
  afterNextRender,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('swiperContainer')
  swiperRef: ElementRef | undefined;

  @Input() services: StoreService[] = [];

  constructor() {
    afterNextRender(() => {
      if (this.swiperRef) {
        this.swiperRef.nativeElement.initialize();
      }
    });
  }
}
