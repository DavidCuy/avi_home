import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { FormValidator } from '../../validators/formValidator';

declare function init_plugins();
declare function loader_show();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submiting: boolean = false;
  year: number = new Date().getFullYear();

  constructor(private _userService: UserService,
              private _router: Router) {
    if (this._userService.isLoged()) {
      this._router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    loader_show();
    init_plugins();

    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      c_password: new FormControl( null),
      accept_conditions: new FormControl(false, Validators.requiredTrue)
    }, {
      validators: FormValidator.match('password', 'c_password')
    });
  }

  register() {
    this.submiting = true;

    const user: any = {
      rfc: this.form.controls.rfc.value,
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
      c_password: this.form.controls.c_password.value
    };


    this._userService.register(user).subscribe( response => {
        if (response === true) {
          this._router.navigate(['/login']);
        }
        this.submiting = false;
      },
      error => {
        this.submiting = false;
        if (error.status === 401) {
          swal('Error', 'No existe usuario con las credenciales', 'error');
        } else {
          swal('Error', 'Error inesperado', 'error');
        }
      });
  }

}
