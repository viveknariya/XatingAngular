import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, User } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:User|null = new User();
  SignUpForm!: FormGroup;

  constructor(private authService:AuthService,private http:HttpClient){
    this.authService.user.subscribe({
      next : (nxt) => {
       this.user = nxt;
      }
    })

    this.SignUpForm =  new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      community : new FormControl("patel"),
      gender : new FormControl("male"),
      password : new FormControl(),
      confirmPassword : new FormControl()
    })
  }

  signUp(){
    const payload = {
      'firstName' : this.SignUpForm.get('firstName')?.value,
      'lastName' : this.SignUpForm.get('lastName')?.value,
      'community' : this.SignUpForm.get('community')?.value,
      'gender' : this.SignUpForm.get('gender')?.value,
      'password' : this.SignUpForm.get('password')?.value,
      'confirmPassword' : this.SignUpForm.get('confirmPassword')?.value
    }
    this.http.post("https://localhost:7273/api/Auth/SaveBasicInfo", payload).subscribe({
      next:(nxt) => {
        console.log(nxt)
      },
      error: (err) =>{
        console.log(err)
      },
      complete: () => {
        console.log("Complete")
      }

    })
  }
}
