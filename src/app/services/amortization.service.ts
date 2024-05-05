import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../entity/Payment';

@Injectable({
  providedIn: 'root'
})
export class AmortizationService {

  private apiUrl = 'http://localhost:8085/amortizations'; // Assurez-vous de mettre l'URL correcte de votre API Spring Boot

  constructor(private http: HttpClient) { }
  retrieveAmortization(amortization: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/amortisation', amortization);
  }

  calculateInterest(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/CalculateInterest');
  }

  initializeUnknownFields(amortization: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/amortisation', amortization);
  }

  calculatePaymentList(amortization: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/CalculateInterest', amortization);
  }

  createPdf(payments: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/createPdf', payments);
  }
}
