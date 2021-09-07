import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAccessGuard implements CanActivate {
  access:boolean=true;
  constructor(  private authService:AuthService,
    private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      

      this.authService.getUser().subscribe(data=>{
        if(data==null){
          this.access=true;
          
        }else{
          this.access=false;
        }
      })
    
      return this.access;
  }
  
}
