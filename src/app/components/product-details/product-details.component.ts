import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../modules/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:Product;

  constructor(private activatedRoute:ActivatedRoute,
              private productService:ProductService,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.product = this.productService.getProductById(this.activatedRoute.snapshot.params['product']);
    console.warn(this.product.brand);
  }

  removeProduct(p:Product):void{
    this.productService.removeProduct(p);
    this.toastr.error("Id : "+this.product.id+"\nTitle : "+this.product.ref,"Deleted successfully");
  }

}
