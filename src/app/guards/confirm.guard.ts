import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { MyWishlistComponent } from '../wishlist/my-wishlist/my-wishlist.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanActivate {
constructor(private prodSrv:ProductsService, private router:Router){}
  canActivate(
    route: MyWishlistComponent,
    state: RouterStateSnapshot): boolean
     {
      const token=this.prodSrv.getTokenFromLocalStorage();
      if(token && token.length>0){
        return true;
      }else{
        this.router
        return false;
      }

  }
  
}
