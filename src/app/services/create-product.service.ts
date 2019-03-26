import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductModel } from '../components/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class CreateProductService {
  product: string;

  private productUrl = 'http://localhost:3001/products/';

  constructor(private http: HttpClient,
    private router: Router) { }

  createProduct(body) {
    // console.log(body);
    return this.http.post(this.productUrl, body);
    
  }

  getProducts() {
    return this.http.get<Observable<ProductModel[]>>(this.productUrl)
      
      //   const products: ProductModel[] = [];

      //   products.push(new ProductModel(data.productType,
      //     data.productName,
      //     data.price,
      //     data.description,
      //     data.imageUrl));
      //   return products;
      // })
    }
  
    
  }
