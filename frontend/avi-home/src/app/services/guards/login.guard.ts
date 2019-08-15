import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _userService: UserService, public _router: Router) { }

  canActivate( ): Observable<boolean> | Promise<boolean> | boolean {
    if ( this._userService.isLoged() ) {
      return true;
    }
    console.log('Para el login we');
    this._router.navigate(['/login']);
    return false;
  }
}
