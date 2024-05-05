import { Component, OnInit } from '@angular/core';
import { AmortizationService } from './../../services/amortization.service';
import { Payment } from '../../entity/Payment';


@Component({
  selector: 'app-amortization',
  templateUrl: './amortization.component.html',
  styleUrls: ['./amortization.component.css']
})
export class AmortizationComponent implements OnInit {
  amortization: any;
  payments: Payment[] = [];
  constructor(private amortizationService: AmortizationService) { }

  ngOnInit(): void {
    // Initialize the amortization object
    this.amortization = {};

    // Call the API endpoints
    this.amortizationService.retrieveAmortization(this.amortization).subscribe(data => {
      this.amortization = data;
    });

    this.amortizationService.calculateInterest().subscribe(data => {
      console.log('Interest: ', data);
    });

    this.amortizationService.initializeUnknownFields(this.amortization).subscribe(data => {
      console.log('Initialized fields: ', data);
    });

    this.amortizationService.calculatePaymentList(this.amortization).subscribe(data => {
      console.log('Payment list: ', data);
    });

    this.amortizationService.createPdf(this.amortization).subscribe(data => {
      console.log('PDF created: ', data);
    });
  }
  retrieveAmortization(): void {
    this.amortizationService.retrieveAmortization(this.amortization).subscribe(data => {
      this.amortization = data;
    });
  }

  calculateInterest(): void {
    this.amortizationService.calculateInterest().subscribe(data => {
      console.log('Interest: ', data);
    });
  }
  initializeUnknownFields(): void {
    this.amortizationService.initializeUnknownFields(this.amortization).subscribe(data => {
      this.amortization = data;
    });
  }

  calculatePaymentList(): void {
    this.amortizationService.calculatePaymentList(this.amortization).subscribe(data => {
      this.payments = data;
    });
  }

  createPdf(): void {
    this.amortizationService.createPdf(this.payments).subscribe(data => {
      console.log('PDF created successfully');
    }, error => {
      console.error('Error creating PDF:', error);
    });
  }
}
