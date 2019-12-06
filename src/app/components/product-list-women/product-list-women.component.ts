import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modules/product';

@Component({
  selector: 'app-product-list-women',
  templateUrl: './product-list-women.component.html',
  styleUrls: ['./product-list-women.component.scss']
})
export class ProductListWomenComponent implements OnInit {

  products:Product[];
  productNbr:number;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProductsByGender("women").subscribe(p => this.products = p);
    this.productNbr=this.productService.products.length;
  }

  search(searchParam:String) {
    if(searchParam=="")
      this.ngOnInit()
      else{
    this.products = this.products.filter(res => {
      return res.ref.toLocaleLowerCase().match(searchParam.toLocaleLowerCase());
    });}
  }
}
