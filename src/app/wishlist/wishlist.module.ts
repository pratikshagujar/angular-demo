import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';


@NgModule({
  declarations: [
    WishlistComponent,
    MyWishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
