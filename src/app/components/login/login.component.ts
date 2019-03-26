import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms'
import { Subscriber, from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel
  isValid: boolean;

  constructor(private authService: AuthService,
    private router: Router) {
    this.loginModel = new LoginModel('','');
  }

  ngOnInit() {
  }

  loginFunc(form: NgForm) {
    if (form.valid) {
      this.authService.login(form.value)
    }
  }

}
