import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

  canActivate() {
    if (!this.auth.loggedIn){
      this.router.navigate(['auth/login']);
    }
    return this.auth.loggedIn;
  }

}
