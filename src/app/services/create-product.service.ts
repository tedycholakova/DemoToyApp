import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {} from '../components/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {
  product: string;

  private productUrl = 'http://localhost:3001/products/';

  constructor(private http: HttpClient, 
              private router: Router) { }

  createProduct(body) {
    return this.http.post(this.productUrl,body);
  }
}
