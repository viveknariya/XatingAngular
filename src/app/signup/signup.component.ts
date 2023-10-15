import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, User } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
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
      Dob : new FormControl(),
      gender : new FormControl("male"),
      password : new FormControl(),
      confirmPassword : new FormControl()
    })
  }

  signUp(){
    const payload = {
      'Gmail':this.authService.userGmail,
      'firstName' : this.SignUpForm.get('firstName')?.value,
      'lastName' : this.SignUpForm.get('lastName')?.value,
      'Dob' : this.SignUpForm.get('Dob')?.value,
      'gender' : this.SignUpForm.get('gender')?.value,
      'password' : this.SignUpForm.get('password')?.value
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
