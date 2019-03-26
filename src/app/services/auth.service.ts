import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { LoginModel } from '../components/models/login.model';
import { RegisterModel } from '../components/models/register.model';
import { ProductModel } from 'src/app/components/models/product.model';

@Injectable({ providedIn: 'root' })

export class AuthService {
    user: string;

    private userUrl = 'http://localhost:3001/users/';

    constructor(private http: HttpClient,
        private router: Router,
        private toastr: ToastrService) { }

    login(loginModel: LoginModel) {
        this.http.get(this.userUrl + "?username=" +
            loginModel.username)
            .subscribe(data => {
                this.toastr.success('Successfully Logged In!', 'Success');
                this.user = data[0];

                sessionStorage.setItem('logged', this.user['username']);
                this.router.navigate(['/products']);
            })
    }

    register(body) {
        return this.http.post(this.userUrl, body)
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(['']);
    }

    isLoggedIn() {
        return sessionStorage.getItem('logged') != null
    }
}


