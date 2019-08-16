import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes: any = [];

  constructor(private _router: Router,
              private _homeService: HomeService) { }

  ngOnInit() {
    console.log('Home');
    this._homeService.getHomesByClient().subscribe((resp) => {
      this.homes = resp;
    })
  }

  showRoom(houseId) {
    this._router.navigate([`home/${houseId}`]);
  }

  deleteHome(id) {
    swal(id);
  }

}
