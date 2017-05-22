import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../homepage/products/products-interface';
import { ProductsDataService } from '../homepage/products/products-data.service';

@Component({
  templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit {
  productID: number;
  product: product;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _dataproductservice: ProductsDataService
  ){}

  ngOnInit(){
    this.productID = +this._route.snapshot.params['id'];
    this.product = this._dataproductservice.getProductById(this.productID);
  }
}
