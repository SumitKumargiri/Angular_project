import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  RegisterUser(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`,data);
  }
  LoginUser(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,data);
  }
}
