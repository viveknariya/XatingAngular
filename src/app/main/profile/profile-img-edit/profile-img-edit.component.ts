import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-img-edit',
  templateUrl: './profile-img-edit.component.html',
  styleUrls: ['./profile-img-edit.component.css']
})
export class ProfileImgEditComponent {
  profileImgForm:FormGroup;
  imageFile!: File;

  previewImageUrl: string;
  
  constructor(private httpClient:HttpClient){
    this.profileImgForm = new FormGroup({
      profileImg : new FormControl()
    })
    this.previewImageUrl = "assets/Emma_D'Arcy.jpg";
  }
  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
    if (this.imageFile) {
      this.previewImageUrl = URL.createObjectURL(this.imageFile);
    }
  }
  saveProfileImage(){
    this.httpClient.post("",this.imageFile)
  }


}
