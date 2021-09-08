import { ContentObserver } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLoged();
  }

  async checkUserLoged(){
    let isRecruiter:boolean=false;
    let user=JSON.parse(sessionStorage.getItem("user") as string) as any;

    if(user.rol!=='recruiter'){
      this.router.navigate(['/home'])
      return false
    }else{

      return true;
    }



  }
  
}
