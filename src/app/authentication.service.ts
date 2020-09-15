import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  tokenAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvbiIsImFkbWluIjp0cnVlfQ.6ly-kq_Q4KcWxojxofeazrFshElkcUWJqJG4_0doF7U";
  tokenCli ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOmZhbHNlfQ.qWKELmsR8hLrEZE8I8-SYzrajQO82ZSliS-7d1xyNfk";
  private helper = new JwtHelperService();

  constructor(private http: HttpClient) {
   }

   loginAuth(username: string, password:string){
     if (username === 'a' && password === 'a'){
       //store the Json web token locally in the browser, dummy jwt created in jwt.io
        localStorage.setItem("token", this.tokenCli);
       return true;
     }else if (username === 'b' && password === 'b'){
       localStorage.setItem("token", this.tokenAdmin);
       return true;
     }else{

        return false;
     }
     return true;
   }

   logout(){
    localStorage.removeItem("token");
   }

   isLoggedIn(){
    //const isExpired = this.helper.isTokenExpired(this.token);
    //return this.helper.isTokenExpired(this.token); // gets from the local storage
    //console.log(this.helper.isTokenExpired(this.token));
    if(localStorage.getItem("token"))
    return true;
    else return false;
   }

   userInfo(){
    let t=localStorage.getItem("token");
    if(t)
      return this.helper.decodeToken(t);
    return false;
   }

   getProds(){
    return this.http.get("http://5cd1447bd4a78300147be735.mockapi.io/prods");
   }

   getUsers(){

   }
}
