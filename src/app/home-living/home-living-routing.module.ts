import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLivingComponent } from './home-living.component';

const routes: Routes = [{ path: '', component: HomeLivingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLivingRoutingModule { }
