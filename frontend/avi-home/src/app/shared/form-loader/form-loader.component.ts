import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.css']
})
export class FormLoaderComponent implements OnInit {

  @Input() submiting: boolean;

  constructor() { }

  ngOnInit() {
  }

}
