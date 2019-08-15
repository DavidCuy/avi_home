import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINT } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;
  token: string;
  urlImage: string;

  constructor(private _httpClient: HttpClient, private _router: Router) {
    this.fromStorage();
  }

  isLoged() {
    this.fromStorage();
    return ( this.token.length > 5 );
  }

  fromStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
      this.urlImage = localStorage.getItem('imageUrl');
    } else {
      this.token = '';
      this.user = null;
      this.urlImage = '';
    }
  }

  logout( ) {
    this.token = ''; this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('business');
    this._router.navigate(['/login']);
  }

  login( user: any, rememberMe: boolean = false ) {
    if (rememberMe) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = ENDPOINT + '/login';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this._httpClient.post( url, user, { headers: headers } )
      .pipe(map( (resp: any) => {
        localStorage.setItem('id', resp.user.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        this.user = resp.user;

        return true;
      }));
  }

  clearImageStorage() {
    localStorage.setItem('imageUrl', '');
    this.fromStorage();
  }

  register(user: any) {
    localStorage.setItem('email', user.email);

    const url = ENDPOINT + '/register';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this._httpClient.post( url, user, { headers: headers } )
      .pipe(map( (resp: any) => {
        /* localStorage.setItem('id', resp.user.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        this.user = resp.user;

        this.getBusinessOfUser().subscribe(business => {
          localStorage.setItem('imageUrl', business.logo);
          localStorage.setItem('business', business.name);
        });*/
        return true;
      }));
  }
}
