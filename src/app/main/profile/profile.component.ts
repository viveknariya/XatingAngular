import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, User } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent{

  user:User|null = new User();

  constructor(private authService:AuthService){
    this.authService.user.subscribe({
      next : (nxt) => {
       this.user = nxt;
      }
    })
  }
}
