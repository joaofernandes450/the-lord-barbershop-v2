import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  images = [
    'assets/gallery/1.png',
    'assets/gallery/2.png',
    'assets/gallery/3.png',
    'assets/gallery/4.png',
    'assets/gallery/5.png',
    'assets/gallery/6.png',
  ];
}
