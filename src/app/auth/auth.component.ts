import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CredentialResponse } from 'google-one-tap';
import { AuthService, User } from './auth.service';
import { Router } from '@angular/router';
import { ResponseData } from '../model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private http:HttpClient, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: "684852087250-9ab3n4ur5v9d1lhndmfl5vlb5asqidkd.apps.googleusercontent.com",
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      setTimeout(() => {
        // @ts-ignore
        google.accounts.id.prompt();
      }, 700); 
      // @ts-ignore
      google.accounts.id.renderButton(document.getElementById("googleButton"),{type:"standard"})
  }

  handleCredentialResponse(response: CredentialResponse) {
    console.log(response);
    const header = new HttpHeaders().set('Content-type','application/json');
    this.http.post("https://localhost:7273/api/Auth/LoginWithGoogle",JSON.stringify(response.credential),{headers:header,responseType:"json"}).subscribe({
        next : (nxt) => {          
          console.log((<ResponseData<string>>nxt).stringCode);
          const sC = (<ResponseData<string>>nxt).stringCode;
          if(sC === "USER_NOT_EXISTS"){
            this.router.navigate(['/signup']);
            return;
          }
          // this.auth.user.next(<User>nxt);
          // this.router.navigate(['/main']);
          // localStorage.setItem('user',JSON.stringify(<User>nxt));
        },
        error : (err) => {
          this.auth.user.next(null);
          console.log(err);
        } 
    })
  }

}
