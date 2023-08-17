import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated:boolean = false;

  constructor(private auth:AuthService){}

  ngOnInit(): void {
    this.auth.user.subscribe(
      {
        next: (nxt) => {
          if(nxt !== null){
            this.isAuthenticated = true;
          }
          else{
            this.isAuthenticated = false;
          }

        },
        error: (err) => {
          console.log(err);
        }
      })
  }

  AuthMode(){
    if(this.isAuthenticated){
      this.auth.user.next(null);
    }
  }
}
