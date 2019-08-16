import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DEVICE_QUERYS } from '../graphql/device.gql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private _apollo: Apollo) { }

  getDevicesByRoomId(roomId: string) {
    return this._apollo.query({
      query: DEVICE_QUERYS.getOnlyDevices,
      variables: {
        roomId: roomId
      }
    }).pipe(map( (resp) => {
      // @ts-ignore
      return resp.data.Devices;
    }));
  }
}
