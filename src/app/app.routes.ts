import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about/about.component';
import { HomeComponent } from './features/about/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
