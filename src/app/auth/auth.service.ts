import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
}
export class User{
  firstName!: string;
  lastName!: string;
  gmail!: string;
  profId!:string;
}
