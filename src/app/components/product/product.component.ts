import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../modules/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input("product") p:Product;
  
  constructor(private productService:ProductService,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.p.image.replace("fakepath","assets").slice(3);
    console.warn(this.p.image);
  }

  removeProduct(p:Product):void{
    this.productService.removeProduct(p);
    this.toastr.error("Id : "+this.p.id+"\nTitle : "+this.p.ref,"Deleted successfully");
  }
}
