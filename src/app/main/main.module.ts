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
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { AboutComponent } from './profile/edit-profile/about/about.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    RecommendationComponent,
    EditProfileComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
