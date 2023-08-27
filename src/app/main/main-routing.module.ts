import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { MainComponent } from './main.component';
import { ProfileImgEditComponent } from './profile/profile-img-edit/profile-img-edit.component';
import { ProfileBasicInfoEditComponent } from './profile/profile-basic-info-edit/profile-basic-info-edit.component';

const routes: Routes = [
  {
    path:"main",
    component:MainComponent,
    children:[
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"profile",component:ProfileComponent},
      {path:"profile/img/edit",component:ProfileImgEditComponent},
      {path:"profile/basic/edit",component:ProfileBasicInfoEditComponent},
      {path:"recommendation",component:RecommendationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
