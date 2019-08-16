import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { HOME_QUERYS } from '../graphql/home.gql'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _apollo: Apollo) { }

  getHomesByClient(userId: string) {
    return this._apollo.mutate({
      mutation: HOME_QUERYS.getHomes,
      variables: {
        userId: userId
      }
    }).pipe(map( (resp) => {
      return resp.data.Homes;
    }));
  }
}
