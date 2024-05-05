import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplatefrontComponent } from './FrontOffice/all-templatefront/all-templatefront.component';
import { ProductComponent } from './product/product.component';
import { PartnerComponent } from './partner/partner.component';
import { AmortizationComponent } from './amortization/amortization.component';
import { PaymentComponent } from './payment/payment.component';
import { FrontOfficeRootComponent } from './front-office/front-office-root/front-office-root.component';
import { BackOfficeRootComponent } from './back-office/back-office-root/back-office-root.component';
import { BackOfficeModule } from './back-office/back-office.module';
import { FrontOfficeModule } from './front-office/front-office.module';
const routes: Routes = [
  {
    path: "back-office", component: BackOfficeRootComponent,
  },
  {
    path: 'front-office', component: FrontOfficeModule,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), BackOfficeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
