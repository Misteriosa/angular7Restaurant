import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  pass:string;
  invalidLogin: boolean= false;

  constructor(private auth: AuthenticationService, private route: Router) {
  }

  ngOnInit() {
  }

  login(e){
    //e.preventDefault();

    if(this.auth.loginAuth(e.username, e.password)){
      //TODO: SET LINK ACTIVE FOR HOME
      this.route.navigate([""]);
    }else{
      this.invalidLogin=true;
    }
    
  }

}
