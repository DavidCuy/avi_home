import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  roomId: string = '';
  devices: any = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _deviceServices: DeviceService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.roomId = params.id;
      this._deviceServices.getDevicesByRoomId(this.roomId).subscribe((resp) => {
        this.devices = resp;
      });
    });
  }
}
