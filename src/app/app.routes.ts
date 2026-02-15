import { Routes } from '@angular/router';
import { HomepageComponent as BasicHomepage } from './components/basic-design/homepage/homepage.component';
import { HomepageComponent as MinimalistHomepage } from './components/minimalist-design/homepage/homepage.component';

export const routes: Routes = [
  { path: '', component: MinimalistHomepage },
  { path: 'old', component: BasicHomepage },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
