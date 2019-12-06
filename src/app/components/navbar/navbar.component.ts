import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { 
  }

  ngOnInit() {
    
  }

}
