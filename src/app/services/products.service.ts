import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

getAuthToken(){
  const token="eyJhbGciOiJIUzI1NiIsInR";
  return token;
}

setTokenInLocalStorage(authToken:string){
localStorage.setItem("token",authToken);

}

getTokenFromLocalStorage(){
const token=localStorage.getItem("token");
return token;
}
}
