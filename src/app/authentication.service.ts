import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private cookie:CookieService,private route : Router) { }


  authenticate(){
    if(!this.cookie.check("userid")||this.cookie.get("userid")==="0"){
      this.route.navigate(['/login']);
    }
  }

}
