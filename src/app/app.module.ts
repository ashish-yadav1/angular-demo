import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/first/dashboard.module';
import { AppHomeComponent } from './components/apphome/apphome.component';
import { ThirdComponent } from './components/third/third.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, AppHomeComponent, ThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
