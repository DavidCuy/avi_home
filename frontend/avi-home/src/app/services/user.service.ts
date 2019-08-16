import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENDPOINT } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import jwt_decode from 'jwt-decode';

import { USER_MUTATORS } from '../graphql/user.gql';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;
  token: string;
  urlImage: string;

  constructor(private _httpClient: HttpClient,
              private _router: Router,
              private _apollo: Apollo) {
    this.fromStorage();
  }

  isLoged() {
    this.fromStorage();
    return ( this.token.length > 5 );
  }

  fromStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = jwt_decode(this.token);
    } else {
      this.token = '';
      this.user = null;
    }
  }

  logout( ) {
    this.token = ''; this.user = null;
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    this._apollo.getClient().resetStore();
  }

  login( user: any, rememberMe: boolean = false ) {
    const userData: any = {
      email: user.email,
      password: user.password
    };
    if (rememberMe) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    return this._apollo.mutate({
      mutation: USER_MUTATORS.login,
      variables: {
        userData: userData
      }
    }).pipe(map( (resp) => {
      const retResp = resp.data.login;
      if (retResp.message === 'OK') {
        localStorage.setItem('token', retResp.token);
        this.user = jwt_decode(retResp.token);
        this.fromStorage();
        return true;
      }
      return {
        success: false,
        message: retResp.token
      };
    }));
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
