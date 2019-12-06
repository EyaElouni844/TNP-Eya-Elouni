import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
login="admin";
pass="admin";
isLogged:boolean;

  constructor() { }
  isLoggedIn(login:String,pass:String):boolean{
    this.isLogged= this.login==login && this.pass==pass;
    return this.isLogged;
  }
}
