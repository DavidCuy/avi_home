import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes: any = [];

  constructor(private _router: Router,
              private _homeService: HomeService,
              private _userService: UserService) { }

  ngOnInit() {
    this._homeService.getHomesByClient(this._userService.user.id).subscribe((resp) => {
      this.homes = resp;
    });
  }

  showRoom(houseId) {
    this._router.navigate([`home/${houseId}`]);
  }

  deleteHome(id) {
    swal(id);
  }

}
