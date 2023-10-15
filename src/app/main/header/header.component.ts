import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isAuthenticated:boolean = false;

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.authService.user.subscribe(
      {
        next: (nxt) => {
          console.log(nxt);
          this.isAuthenticated = true;
        },
        error: (err) => {
          console.log(err);
          this.isAuthenticated = true;
        }
      })
  }
  LogOut(){
    this.authService.user.next(null);
    localStorage.setItem('user','');
    this.router.navigate(['auth']);
  }
}
