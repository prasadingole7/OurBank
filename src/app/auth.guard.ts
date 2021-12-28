import { DoCheck, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { admin } from './classes/admin';
import { LoginComponent } from './login/login.component';
import { NewApi } from './services/newApi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private login:LoginComponent,private api:NewApi){}


  canActivate() {
    return true;

  }

}
