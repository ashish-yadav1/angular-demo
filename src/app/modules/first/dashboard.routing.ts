
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'second', loadChildren: () => import('../second/second.module').then(m => m.SecondModule) }
];

export const DashboardRoutes = RouterModule.forChild(dashboardRoutes);
