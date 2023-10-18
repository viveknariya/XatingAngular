import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, User } from 'src/app/auth/auth.service';
import { ResponseData, Xater } from 'src/app/model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  user:User|null = new User();
  AboutForm!: FormGroup;

  constructor(private authService:AuthService,private http:HttpClient){
    this.authService.user.subscribe({
      next : (nxt) => {
       this.user = nxt;
      }
    })
    this.AboutForm =  new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      Dob : new FormControl(),
      gender : new FormControl("male"),
      community : new FormControl()
    })
  }
  ngOnInit(): void {
    this.http.get(`https://localhost:7273/api/Xater/GetDataById/${this.authService.userGmail}`).subscribe({
      next:(nxt) => {
        console.log(nxt);
        const xater:Xater = (<ResponseData<Xater>>nxt).data
        this.AboutForm.setValue({
          firstName: xater.FirstName,
          lastName: xater.LastName,
          Dob: xater.Dob,
          gender: xater.Gender,
          community: xater.Community
        });
      }
    })
  }
  saveAbout(){
    const payload = {
      'Gmail':this.authService.userGmail,
      'firstName' : this.AboutForm.get('firstName')?.value,
      'lastName' : this.AboutForm.get('lastName')?.value,
      'Dob' : this.AboutForm.get('Dob')?.value,
      'gender' : this.AboutForm.get('gender')?.value,
      'community' : this.AboutForm.get('community')?.value
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
