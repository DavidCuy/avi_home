import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    console.log('Home');
  }

  showRoom(houseId) {
    this._router.navigate([`home/${houseId}`]);
  }

  deleteHome(id) {
    swal(id);
  }

}
