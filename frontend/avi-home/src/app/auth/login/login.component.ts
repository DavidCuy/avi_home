import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { NgForm } from '@angular/forms';

declare function init_plugins();
declare function loader_show();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submiting: boolean = false;
  year: number = new Date().getFullYear();
  email: string;
  rememberMe: boolean = false;

  constructor(private _userService: UserService,
              private _router: Router) { }

  ngOnInit() {
    loader_show();
    init_plugins();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.rememberMe = true;
    }

    if (this._userService.isLoged()) {
      this._router.navigate(['/home']);
    }
  }

  login(form: NgForm) {
    this.submiting = true;

    this._userService.login(form.value, form.controls.rememberMe.value).subscribe( response => {
      this.submiting = false;
      if (response === true) {
        this._router.navigate(['/home']);
      } else {
        sweetAlert('Error', response.message, 'error');
      }
    }, error => {
      this.submiting = false;
      if (error.status === 401) {
        sweetAlert('Error', error.error.error, 'error');
      } else {
        sweetAlert('Error', 'Error inesperado', 'error');
      }
    });
    /*this._userService.login(form.value, form.controls.rememberMe.value).subscribe( response => {
      if (response === true) {
        this._router.navigate(['/home']);
        this.submiting = false;
      }
    },
    error => {
      this.submiting = false;
      if (error.status === 401) {
        swal('Error', error.error.error, 'error');
      } else {
        swal('Error', 'Error inesperado', 'error');
      }
    });*/
    // return false;
  }

}
