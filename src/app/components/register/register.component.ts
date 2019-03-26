import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { RegisterModel } from '../models/register.model';
import { Router } from '@angular/router';
import { LoginModel } from '../models/login.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterModel;
  id:string = '';
  loginUser: LoginModel

  constructor(private authService: AuthService,private router: Router) { 
    this.user = new RegisterModel('','');
  }

  ngOnInit() {
  }

  registerFunc() {
    let body = {
      id: this.id,
      username: this.user.username,
      password: this.user.password
    }
    this.authService.register(body).subscribe((data) => {
    this.loginUser = new LoginModel (data['username'],data['password']);
    this.authService.login(this.loginUser);
    })
  }
}
