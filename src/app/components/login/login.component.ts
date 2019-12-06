import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router, RouterLink } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
logged=true;
  constructor(private loginService:LoginService,private router:Router) {
  
   }

  ngOnInit() {
  }
  
  connect(login:String,pass:String){
    if(this.loginService.isLoggedIn(login,pass))
      this.router.navigate(['/product-list']);
      else
      this.logged=false;
      

  }

}
