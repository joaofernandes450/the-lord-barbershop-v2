import { Component } from '@angular/core';
import { FooterComponent } from './components/basic-design/footer/footer.component';
import { NavigationComponent } from './components/basic-design/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'the-lord-barbershop-v2';
}
