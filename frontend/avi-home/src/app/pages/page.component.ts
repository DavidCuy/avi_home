import { Component, OnInit } from '@angular/core';

declare function init_plugins();
declare function loader_show();

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    loader_show();
    init_plugins();
  }

}
