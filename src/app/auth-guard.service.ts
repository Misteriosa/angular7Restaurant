import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthenticationService, private route: Router) { }

  canActivate(){
    if(this.auth.isLoggedIn() && this.auth.userInfo().admin)
      return true;
    this.route.navigate(["login"]);
    return false;

  }

}
