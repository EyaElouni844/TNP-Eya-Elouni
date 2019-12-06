import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../../modules/product';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {
  productForm = new FormGroup({
    ref: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    image: new FormControl(''),
    gender: new FormControl(''),
    brand: new FormControl(''),
    description: new FormControl(''),
  });
  private p1:Product = this.productService.getProductById(this.activatedRoute.snapshot.params['product']);

  constructor(private productService:ProductService,
              private activatedRoute:ActivatedRoute,
              private toastr:ToastrService) { }

  ngOnInit() {
  }
onSubmit():void{
  //TODO old values of product
  let product:Product = this.productForm.value;
  let p2:Product = new Product( this.p1.id,
                          product.ref,
                          product.gender,
                          product.price,
                          product.quantity,
                          product.image,
                          product.description,
                          product.brand,
                          product.bMaterial,
                          product.bColor,
                          product.shape,
                          product.color,
                          product.move)
    this.productService.updateProduct(this.p1,p2);


}
}
