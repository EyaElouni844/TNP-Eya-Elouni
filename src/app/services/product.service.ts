import { Injectable } from '@angular/core';
import { Product } from '../modules/Product';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = new Array<Product>();
  id:number = 1;
  constructor() { 
   
   }

  getProductsByGender(gender:String):Observable<Product[]>{
  /*intitialisation dune liste */
    let productCat:Product[]=new Array<Product>();
    if(gender=="")
    return of(this.products);
    else{
    this.products.forEach(e => {
      if(gender==e.gender)
        productCat.push(e);
    });
    return of(productCat);}
  }

  getProductById(id:number):Product{
    let p:Product;
    this.products.forEach(e => {
      if(id==e.id)
        p = e
    });
    return p;
  }

  addProduct(p:Product):void{
    if(this.products.indexOf(p)<0){
      this.products.push(p);
      console.warn("product added");
      this.id++;
    }
    else
      console.warn("product already exists");
  }

  removeProduct(p:Product):void{
    this.products.forEach(e => {
      if(p.id==e.id)
        this.products.splice(this.products.indexOf(e),1)
    });
  }

  updateProduct(p1:Product,p2:Product):void{
    this.products.forEach(e => {
      if(p1.id==p2.id){
          p1.brand=p2.brand;
          p1.description=p2.description;
          p1.gender=p2.gender;
          p1.image=p2.image;
          p1.price=p2.price;
          p1.quantity=p2.quantity;
          p1.ref=p2.ref;
      }
        
    });
  }

  //TODO list items nbr
}
