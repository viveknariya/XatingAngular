import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, User } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile-basic-info-edit',
  templateUrl: './profile-basic-info-edit.component.html',
  styleUrls: ['./profile-basic-info-edit.component.css']
})
export class ProfileBasicInfoEditComponent {
  user:User|null = new User();
  BasicInfoForm!: FormGroup;

  constructor(private authService:AuthService,private http:HttpClient){
    this.authService.user.subscribe({
      next : (nxt) => {
       this.user = nxt;
      }
    })

    this.BasicInfoForm =  new FormGroup({
      community : new FormControl(),
      dob : new FormControl(),
      city : new FormControl(),
      gender : new FormControl()
    })
  }

  saveProfileBasicInfo(){
    const payload = {
      'comuunity' : this.BasicInfoForm.get('comuunity')?.value,
      'dob' : this.BasicInfoForm.get('dob')?.value,
      'city' : this.BasicInfoForm.get('city')?.value,
      //'gender' : this.BasicInfoForm.get('gender')?.value
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
