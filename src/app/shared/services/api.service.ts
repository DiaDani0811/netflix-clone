import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  post(path: string, body: Object={}){
   return this.http.post(`${environment.api_url}${path}`,body).pipe((res: any)=>{
    return res;
   })
  }
  get(path: string, params: HttpParams = new HttpParams()): Observable<any>{
    let headers = new HttpHeaders
    return this.http.get(`${environment.api_url}${path}`,{params,headers:headers}).pipe((res: any)=>{
      return res;
    });
  }
  update(path: string, body: Object={}){
    return this.http.put(`${environment.api_url}${path}`,body).pipe((res: any)=>{
      return res;
    })
 }
 delete(path: string,id:number){
  return this.http.delete(`${environment.api_url}${path}`+id).pipe((res: any)=>{
    return res
  })
 }
}

