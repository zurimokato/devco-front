import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleCandidateGuard implements CanActivate {
  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLoged( );
  }

  async checkUserLoged(){
    let isRecruiter:boolean=false;
    let user=JSON.parse(sessionStorage.getItem("user") as string) as any;

    if(user.rol!=='canidate'){
      this.router.navigate(['/home'])
      return false
    }else{

      return true;
    }



  }
  
}
