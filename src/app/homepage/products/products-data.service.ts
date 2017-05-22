import { Injectable } from '@angular/core';
import { PRODUCTLIST } from './products-data';
import { product } from './products-interface';

@Injectable()

export class ProductsDataService {
  getProductList() : product[]{
    return PRODUCTLIST;
  }
  getProductById(productID:number){
    return PRODUCTLIST.find(r => r.id == productID)
  }
}
