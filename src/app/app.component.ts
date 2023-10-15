import { Component, OnInit } from '@angular/core';
import { AuthService, User } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthService,private router:Router){
    
    const user = localStorage.getItem('user');
    if(!user){
      this.router.navigate(['main']);
      return;
    }
    if(user != null){
      this.authService.user.next(<User>JSON.parse(user));
      this.router.navigate(['main']);
      return;
    }
  }

  ngOnInit(): void {    
  }
  title = 'Xating2';
}
