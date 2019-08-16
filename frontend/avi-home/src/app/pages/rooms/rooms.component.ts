import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  homeId: string = '';
  rooms: any = [];

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _roomServices: RoomService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.homeId = params.id;
      this._roomServices.getRoomsByHomeId(this.homeId).subscribe((resp) => {
        this.rooms = resp;
      });
    });
  }

  showDevices(roomId) {
    this._router.navigate([`device/${roomId}`]);
  }

  deleteRoom(id) {
    swal(id);
  }
}
