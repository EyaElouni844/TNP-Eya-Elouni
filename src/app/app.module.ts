import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { LoginComponent } from './components/login/login.component';

import { ToastrModule } from 'ngx-toastr';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListMenComponent } from './components/product-list-men/product-list-men.component';
import { ProductListWomenComponent } from './components/product-list-women/product-list-women.component';
import { ProductListMixtComponent } from './components/product-list-mixt/product-list-mixt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    AddproductComponent,
    LoginComponent,
    UpdateproductComponent,
    ProductDetailsComponent,
    ProductListMenComponent,
    ProductListWomenComponent,
    ProductListMixtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
