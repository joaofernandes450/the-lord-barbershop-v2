import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSwiperComponent } from './services-swiper.component';

describe('ServicesSwiperComponent', () => {
  let component: ServicesSwiperComponent;
  let fixture: ComponentFixture<ServicesSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
