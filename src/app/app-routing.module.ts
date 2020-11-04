import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/apphome/apphome.component';


const routes: Routes = [
  { path: '', component: AppHomeComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/first/dashboard.module').then(m => m.DashboardModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
