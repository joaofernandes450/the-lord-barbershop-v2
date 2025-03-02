import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { ReusableHeaderComponent } from '../reusable-header/reusable-header.component';

@Component({
  selector: 'app-navigation',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterOutlet,
    MatButtonModule,
    ReusableHeaderComponent,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  sidenavOpen: boolean = false;
  showLogo: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // let element = document.querySelector('.navigation-bar') as HTMLElement;
    // if (window.pageYOffset > element.clientHeight) {
    //   element.classList.add('scrolled');
    //   this.showLogo = true;
    // } else {
    //   element.classList.remove('scrolled');
    //   this.showLogo = false;
    // }
  }
}
