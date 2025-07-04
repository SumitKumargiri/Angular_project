import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'https://localhost:7050/api/payment'; // .NET API URL

  constructor(private http: HttpClient) {}

  // 🟢 Initiate Payment API Call
  initiatePayment(name: string, mobile: string, amount: number): Observable<any> {
    const body = { name, mobile, amount };
    return this.http.post(`${this.baseUrl}/initiate`, body);
  }

  // 🔵 Check Payment Status API Call
  checkStatus(transactionId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/status?transactionId=${transactionId}`);
  }
}
