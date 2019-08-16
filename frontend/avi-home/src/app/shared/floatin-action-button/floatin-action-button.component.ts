import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floatin-action-button',
  templateUrl: './floatin-action-button.component.html',
  styleUrls: ['./floatin-action-button.component.css']
})
export class FloatinActionButtonComponent implements OnInit {

  @Input() model: string;

  constructor() { }

  ngOnInit() {
  }

  addElement() {
    if (this.model.toLowerCase() === 'home') {
      (<any>$('#addModalHome')).modal('show'); 
    } else if (this.model.toLowerCase() === 'room') {
      (<any>$('#addModalRoom')).modal('show');
    } else if (this.model.toLowerCase() === 'device') {
      (<any>$('#addModalDevice')).modal('show');
    }
  }

}
