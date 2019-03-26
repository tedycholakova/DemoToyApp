import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { CreateProductService } from 'src/app/services/create-product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Toy List";
  imageWidth: number = 70;
  imageMargin: number = 2;
  showImage: boolean = false;
<<<<<<< HEAD

  products: Observable<ProductModel[]>;
  
  constructor(private productService : CreateProductService, private router: Router) { 
    
  }
=======
  // _listFilter: string;

  // get listFilter(): string {
  //   return this._listFilter;
  // } 
  // set listFilter(value:string) {
  //   this._listFilter = value;
  //   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  // }

  // filteredProducts: ProductModel[];
  products: Observable<ProductModel[]>;
//   products: ProductModel[] 
//   = [
//     {
//         "productType": "Baby",
//         "productName": "toy 1",
//         "price": "5",
//         "description": "nice toy",
//         "imageUrl": "../../../assets/images/baby/baby-toy-1.jpg"
//       },
//       {
//         "productType": "Boy",
//         "productName": "Spiderman",
//         "price": "10",
//         "description": "nice toy",
//         "imageUrl": "../../../assets/images/boy/spiderman.jpg"
//       },
//       {
//         "productType": "Girl",
//         "productName": "Barbie",
//         "price": "15",
//         "description": "nice toy",
//         "imageUrl": "../../../assets/images/girl/barbie.jpg"
//       }
// ];
  
  constructor(private productService : CreateProductService, private router: Router) { 
    // this.filteredProducts = this.products;
    // this.listFilter = '';
  }

  // performFilter(filterBy: string) : ProductModel[] {
  //   filterBy = filterBy.toLocaleLowerCase();
  //   return this.products.filter((product: ProductModel) => 
  //     product.productType.toLocaleLowerCase().indexOf(filterBy) !== -1);
  // }
>>>>>>> e1d4cdfb6eced398f889d5e1a401153dadfca160

  toggleImage() :void {
    this.showImage = !this.showImage;
  }

  createProductFunc() {
    this.router.navigate(['/create']);
  }

  ngOnInit() {
<<<<<<< HEAD
    this.productService.getProducts()
        .subscribe(data => {
          this.products = data;
          console.log(this.products)
        });
=======
    
    this.products = this.productService.getProducts();
    console.log(this.products)
>>>>>>> e1d4cdfb6eced398f889d5e1a401153dadfca160
  }
}
