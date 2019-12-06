import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListMenComponent } from './components/product-list-men/product-list-men.component';
import { ProductListWomenComponent } from './components/product-list-women/product-list-women.component';
import { ProductListMixtComponent } from './components/product-list-mixt/product-list-mixt.component';




const routes: Routes = [  
  {
    path:'product-details/:product', 
    component:ProductDetailsComponent
  },
  {
    path:'product-list', 
    component:ProductListComponent
  },
  {
    path:'updateProduct/:product', 
    component:UpdateproductComponent
  },
  {
    path:'', 
    component:LoginComponent
  },
  {
    path:'product-list-men', 
    component:ProductListMenComponent
  },
  {
    path:'product-list-women', 
    component:ProductListWomenComponent
  },
  {
    path:'product-list-mixt', 
    component:ProductListMixtComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

  
export class AppRoutingModule { }
