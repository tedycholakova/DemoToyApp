import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model'
  import { from } from 'rxjs';
import { CreateProductService } from 'src/app/services/create-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  pageTitle: string = 'Create Toy';
  product: ProductModel;
  id: string;

  constructor(private createProductService: CreateProductService,private router: Router) { 
    this.product = new ProductModel('','','','','')  
  }

  ngOnInit() {
  }

  createProductFunc() {

    let body = {
      id: this.id,
      productType: this.product.productType,   
      productName: this.product.productName,
      price: this.product.price,
      description: this.product.description,
      imageUrl: this.product.imageUrl
    }
    this.createProductService.createProduct(body)
      .subscribe((data) => {
      this.product = new ProductModel(data['productType'],data['productName'],
                  data['productPrice'],data['productDescription'],data['productImg']);
                  this.router.navigate(['products']);
    })
    
  }
}
