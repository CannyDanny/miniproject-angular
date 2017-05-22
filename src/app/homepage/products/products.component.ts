import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from './products-data.service';
import { product } from './products-interface';

@Component ({
  selector: 'product-list',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {
  products: product[];

  constructor(private productsDataService: ProductsDataService){

  }
  ngOnInit(){
    this.products = this.productsDataService.getProductList();
  }
}
