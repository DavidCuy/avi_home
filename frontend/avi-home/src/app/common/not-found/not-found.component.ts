import { Component, OnInit } from '@angular/core';

declare function init_plugins();
declare function loader_show();

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    loader_show();
    init_plugins();
  }

}
