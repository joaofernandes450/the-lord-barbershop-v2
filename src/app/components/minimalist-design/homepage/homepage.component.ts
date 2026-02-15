import { Component } from '@angular/core';
import { BookingsComponent } from "../bookings/bookings.component";
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HeaderComponent } from '../header/header.component';
import { StoresComponent } from '../stores/stores.component';

@Component({
  selector: 'app-homepage',
  imports: [
    HeaderComponent,
    StoresComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    BookingsComponent
],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
