import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  post(path: string, body: Object={}){
   return this.http.post(`${environment.JsonserverSwags}${path}`,body).pipe(res=>{
    return res;
   })
  }
  get(path: string, params:URLSearchParams =new URLSearchParams()){
    return this.http.get(`${environment.JsonserverSwags}${path}`).pipe(res=>{
      return res;
    })
  }
  update(path: string, body: Object={}){
    return this.http.put(`${environment.JsonserverSwags}${path}`,body).pipe(res=>{
      return res;
    })
 }
 delete(path: string,id:number){
  return this.http.delete(`${environment.JsonserverSwags}${path}`+id).pipe(res=>{
    return res
  })
 }
}

