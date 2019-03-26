import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms'
import { Subscriber, from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel
  isValid: boolean;

  constructor(private authService: AuthService,
    private router: Router, private toastr: ToastrService) {
    this.loginModel = new LoginModel('','');
  }

  ngOnInit() {
  }

  loginFunc(form: NgForm) {
    if (form.valid) {
      this.authService.login(form.value)
    } else {
      this.toastr.error("Please fill your username and password!");
    }
  }

}
