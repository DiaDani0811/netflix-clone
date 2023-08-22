import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, ReplaySubject } from 'rxjs';
import { SignUpClass } from '../model/signup.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class userService {
  private currentUserSubject = new BehaviorSubject<SignUpClass>({} as SignUpClass);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  constructor(private api:ApiService) { }
  postSignup(data:any){
  return this.api.post('/newUser',data).pipe(res=>{
    return res
   })
  }
}
