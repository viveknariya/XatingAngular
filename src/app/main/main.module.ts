import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { ProfileImgEditComponent } from './profile/profile-img-edit/profile-img-edit.component';
import { ProfileBasicInfoEditComponent } from './profile/profile-basic-info-edit/profile-basic-info-edit.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    RecommendationComponent,
    ProfileImgEditComponent,
    ProfileBasicInfoEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
