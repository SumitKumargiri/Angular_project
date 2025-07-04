import { Component } from '@angular/core';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = '';
  mobile = '';
  amount!: number;
  transactionId: string = '';
  redirectUrl: string = '';
  statusResponse: any;

  constructor(private paymentService: PaymentService) {}

  // 🟢 Initiate Payment
  initiatePayment() {
    if (!this.name || !this.mobile || !this.amount) {
      alert('Please enter all details');
      return;
    }

    this.paymentService.initiatePayment(this.name, this.mobile, this.amount).subscribe(
      (response: any) => {
        console.log('Payment Response:', response);

        if (response.success) {
          // API response ke andar ek JSON string hai, use parse karna hoga
          const paymentData = JSON.parse(response.response);
          
          if (paymentData.success && paymentData.data.instrumentResponse.redirectInfo.url) {
            this.transactionId = paymentData.data.merchantTransactionId;
            this.redirectUrl = paymentData.data.instrumentResponse.redirectInfo.url;

            // User ko PhonePe Payment Page par Redirect karna
            window.location.href = this.redirectUrl;
          } else {
            alert('Payment initiation failed');
          }
        } else {
          alert('Payment initiation failed');
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Payment failed');
      }
    );
  }

  // 🔵 Check Payment Status
  checkPaymentStatus() {
    if (!this.transactionId) {
      alert('Please enter a valid Transaction ID');
      return;
    }

    this.paymentService.checkStatus(this.transactionId).subscribe(
      (response: any) => {
        console.log('Status Response:', response);

        if (response.success) {
          this.statusResponse = JSON.parse(response.response);
        } else {
          alert('Failed to check payment status');
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Error checking payment status');
      }
    );
  }
}
