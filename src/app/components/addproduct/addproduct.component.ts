import { Component, OnInit, SecurityContext } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../modules/product';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductListWomenComponent } from '../product-list-women/product-list-women.component';
import { ProductListMenComponent } from '../product-list-men/product-list-men.component';
import { ProductListMixtComponent } from '../product-list-mixt/product-list-mixt.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  productForm = new FormGroup({
    ref: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    image: new FormControl(''),
    gender: new FormControl('',Validators.required),
    description: new FormControl(''),
    brand: new FormControl(''),
    bMaterial:new FormControl(''),
    bColor:new FormControl(''),
    shape:new FormControl(''),
    color:new FormControl(''),
    move:new FormControl('')
  });

  constructor(private productService: ProductService,
    private toastr: ToastrService

   

  ) {
  }

  ngOnInit() {
  }
  public get quantity()
  { return this.productForm.get('quantity'); }
  public get price()
  { return this.productForm.get('price'); }
  public get gender()
  { return this.productForm.controls.gender; }
  public get ref()
  { return this.productForm.controls.ref; }
  isSubmitted = false;
  onSubmit() {
    console.warn(this.productForm.value);
    let product = this.productForm.value;
    this.productService.addProduct(
      new Product(this.productService.id,
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
    );
    this.toastr.success("Added successfully", product.title);
    this.productForm.reset();
  }
}
//TODO insert values into product list