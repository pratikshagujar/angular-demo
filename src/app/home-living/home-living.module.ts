import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLivingRoutingModule } from './home-living-routing.module';
import { HomeLivingComponent } from './home-living.component';


@NgModule({
  declarations: [
    HomeLivingComponent
  ],
  imports: [
    CommonModule,
    HomeLivingRoutingModule
  ]
})
export class HomeLivingModule { }
