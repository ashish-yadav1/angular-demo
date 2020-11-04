
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';

const secondRoutes: Routes = [
  { path: '', component: SecondComponent }
];

export const SecondRoutes = RouterModule.forChild(secondRoutes);
