import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { ResultComponent } from './components/result/result/result.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'result', component: ResultComponent },
];
