import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeRootComponent } from './back-office-root/back-office-root.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { PartnerComponent } from './partner/partner.component';
import { ProductComponent } from './product/product.component';
import { AmortizationComponent } from './amortization/amortization.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'back-office',
    component: BackOfficeRootComponent,
    children: [
      { path: 'partner', component: PartnerComponent },
      { path: 'product', component: ProductComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'amortization', component: AmortizationComponent },
      { path: '', redirectTo: 'partner', pathMatch: 'full' } // Default child route
    ]
  }
]

@NgModule({
  declarations: [
    BackOfficeRootComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PartnerComponent,
    ProductComponent,
    AmortizationComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [
    BackOfficeRootComponent
  ],
})
export class BackOfficeModule { }
