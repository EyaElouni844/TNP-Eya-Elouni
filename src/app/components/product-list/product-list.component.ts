import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../modules/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  productNbr: number;
  constructor(private productService: ProductService) {

  }
   ngOnInit() {
    this.productService.getProductsByGender("").subscribe(p => this.products = p);
    this.productNbr = this.productService.products.length;

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
