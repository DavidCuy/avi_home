import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import jwt_decode from 'jwt-decode';
import { UserService } from './user.service';
import { HOME_MUTATORS, HOME_QUERYS } from '../graphql/home.gql';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _router: Router,
              private _userService: UserService,
              private _apollo: Apollo) { }

  getHomesByClient() {
    return this._apollo.mutate({
      mutation: HOME_QUERYS.getHomes,
      variables: {
        userId: '5d54b41482ec0639c43108a8'
      }
    }).pipe(map( (resp) => {
      return resp.data.Homes;
    }));
  }
}
