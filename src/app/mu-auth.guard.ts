import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonServiceService } from './service/common-service.service';

@Injectable({
  providedIn: 'root'
})
export class MuAuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private myapi:CommonServiceService,private routes:Router){

  }

  canActivate(

    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //console.log(this.myapi.isLogin());
     if(this.myapi.isLogin()){

      //this.routes.navigateByUrl('register');
      return true;
     } 
     else{
      this.routes.navigateByUrl('login');
      return false;
     }
      
      //return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
