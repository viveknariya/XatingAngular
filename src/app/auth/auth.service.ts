import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  userGmail!: string;
}
export class User{
  firstName!: string;
  lastName!: string;
  dob!:Date;
  gmail!: string;
  community!:string;
  city!: string;
  profileImage!:Uint8Array;
}