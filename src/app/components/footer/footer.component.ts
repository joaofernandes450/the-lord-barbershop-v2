import { Component } from '@angular/core';
import { ReusableHeaderComponent } from '../reusable-header/reusable-header.component';

@Component({
  selector: 'app-footer',
  imports: [ReusableHeaderComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {}
