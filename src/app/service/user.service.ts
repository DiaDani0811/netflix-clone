import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class userService {

  constructor(private api:ApiService) { }
  postSignup(data:any){
  return this.api.post('/signup',data).pipe(res=>{
    return res
   })
  }
}
