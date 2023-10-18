import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { AboutComponent } from './profile/edit-profile/about/about.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path:"main",
    component:MainComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"profile",component:ProfileComponent},
      {path:"editprofile",component:EditProfileComponent},
      {path:"editprofile/about",component:AboutComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
