import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    let userId: string =localStorage.getItem("userId");
    let role: string = localStorage.getItem("role");

    if(userId != undefined && userId != null && role === "admin") 
      return true;
    
    this.router.navigate(['/adminlogin']);
    return false;
  }
}
