import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }

  insertData(name: string, email: string, country: string): Observable<any> {
    const body = { name, email, country };
    return this.http.post<any>(`${this.apiUrl}/data/insert`, body);
  }

  getDataById(id: string | null): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data/${id}`);
  }

  updateData(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/data/${data.id}`, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/data/${id}`);
  }
  
}
