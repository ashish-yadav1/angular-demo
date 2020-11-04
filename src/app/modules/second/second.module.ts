import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { SecondRoutes } from './second.routing';


@NgModule({
  imports: [CommonModule, SecondRoutes],
  declarations: [SecondComponent],
})
export class SecondModule { }
