import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm!: FormGroup;
  name:string = "?";
  yourId:string ="?";

  constructor(private auth:AuthService){}

  ngOnInit(): void {
    this.auth.user.subscribe({
      next : (nxt) => {
        this.name = nxt!.firstName;
        this.yourId = nxt!.profId;
      }
    })

    this.profileForm = new FormGroup({
      dob: new FormControl(),
      community: new FormControl(),
      city: new FormControl(),
      profileImage: new FormControl()
    });
  }

  Submit(){
    
  }
}
