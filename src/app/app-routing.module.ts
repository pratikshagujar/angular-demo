import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmGuard } from './guards/confirm.guard';

const routes: Routes = [
  { path: 'men', loadChildren: () => import('./men/men.module').then(m => m.MenModule) },

 { path: 'women', loadChildren: () => import('./women/women.module').then(m => m.WomenModule) }, 

 { path: 'kids', loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule) }, 

 { path: 'home-living', loadChildren: () => import('./home-living/home-living.module').then(m => m.HomeLivingModule) },

  { path: 'beauty', loadChildren: () => import('./beauty/beauty.module').then(m => m.BeautyModule) }, 

  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, 

  { path: 'wishlist', loadChildren: () => import('./wishlist/wishlist.module').then(m => m.WishlistModule),canActivate:[ConfirmGuard] },

   { path: 'bag', loadChildren: () => import('./bag/bag.module').then(m => m.BagModule),canActivate:[ConfirmGuard] }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
