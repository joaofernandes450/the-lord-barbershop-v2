import { Component } from '@angular/core';
import { HomepageComponent } from './components/minimalist-design/homepage/homepage.component';

@Component({
  selector: 'app-root',
  imports: [HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'the-lord-barbershop-v2';
}
