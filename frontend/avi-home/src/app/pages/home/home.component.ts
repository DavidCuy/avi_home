import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes: any = [];

  constructor(private _router: Router,
              private _apollo: Apollo) { }

  ngOnInit() {
    console.log('Home');
    this._apollo.watchQuery({
      query: gql`
      {
        Homes{
          id
          name
          location
          createdAt
          user {
            id
            name
            email
          }
        }
      }`
    }).valueChanges.subscribe(result => {
      // @ts-ignore
      this.homes = result.data.Homes;
      console.log(this.homes);
    });
  }

  showRoom(houseId) {
    this._router.navigate([`home/${houseId}`]);
  }

  deleteHome(id) {
    swal(id);
  }

}
