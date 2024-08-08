import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  post(path: string, body: Object={}){
   return this.http.post(`${environment.api_url}${path}`,body).pipe(res=>{
    return res;
   })
  }
  get(path: string, params: HttpParams = new HttpParams()): Observable<any>{
    let headers = new HttpHeaders
    return this.http.get(`${environment.api_url}${path}`,{params,headers:headers}).pipe(res=>{
      return res;
    });
  }
  update(path: string, body: Object={}){
    return this.http.put(`${environment.api_url}${path}`,body).pipe(res=>{
      return res;
    })
 }
 delete(path: string,id:number){
  return this.http.delete(`${environment.api_url}${path}`+id).pipe(res=>{
    return res
  })
 }
}

