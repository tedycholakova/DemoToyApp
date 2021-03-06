import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';
import { CreateProductService } from 'src/app/services/create-product.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
  products: Observable<ProductModel[]>;
  
  constructor(private productService : CreateProductService, private router: Router,
    private toastr: ToastrService) { 
    
  }

  toggleImage() :void {
    this.showImage = !this.showImage;
  }

  createProductFunc() {
    this.router.navigate(['/create']);
  }

  deleteProductFunc(id) {
    this.productService.deleteProduct(id)
    .subscribe(() => {
      this.toastr.success('Toy was deleted!');
      this.router.navigate(['products']);
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.productService.getProducts()
        .subscribe(data => {
          this.products = data;
          console.log(this.products)
        });
  }
}
