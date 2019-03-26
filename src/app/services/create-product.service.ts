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
<<<<<<< HEAD
=======

  getProducts() {
    return this.http.get(this.productUrl)
        .subscribe((res: ProductModel) => {
            const products: ProductModel[] = [];
            
            if(res !== null){
              console.log(res[0]);
            }
                // products.push(new ProductModel(data.productType,
                //     data.productName,
                //     data.price,
                //     data.description,
                //     data.imageUrl));
                //     return products;
        })
}
}
>>>>>>> e1d4cdfb6eced398f889d5e1a401153dadfca160
