import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
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
  private formatErrors(error: any) {  
    return  throwError(error.error);
  }
  get(path: string, params: HttpParams = new HttpParams()): Observable<any>{
    let headers = new HttpHeaders
    return this.http.get(`${environment.JsonserverSwags}${path}`,{params,headers:headers}).pipe(catchError(this.formatErrors));
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

