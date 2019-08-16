import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ROOM_QUERYS } from '../graphql/room.gql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _apollo: Apollo) { }

  getRoomsByHomeId(homeId: string) {
    return this._apollo.query({
      query: ROOM_QUERYS.getOnlyRooms,
      variables: {
        homeId: homeId
      }
    }).pipe(map( (resp) => {
      // @ts-ignore
      return resp.data.Rooms;
    }));
  }
}
