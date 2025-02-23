import { Component, OnInit } from '@angular/core';
import { Store, STORES } from '../../models/store';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  standalone: true,
})
export class HomepageComponent implements OnInit {
  availableStores: Store[] = [];

  ngOnInit(): void {
    this.availableStores = STORES;
  }
}
