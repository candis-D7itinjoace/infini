import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontOfficeRootComponent } from './front-office-root/front-office-root.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { PaymentComponent } from './payment/payment.component';
import { PartnerComponent } from './partner/partner.component';
import { AmortizationComponent } from './amortization/amortization.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'front-office',
    component: FrontOfficeRootComponent,
    children: [
      {
        path: "payment", component: PaymentComponent,

      },
      {
        path: "partner", component: PartnerComponent,

      },
      {
        path: "product", component: ProductComponent,
      },
      {
        path: "amortization", component: AmortizationComponent,
      }
    ]
  }
]



@NgModule({
  declarations: [
    FrontOfficeRootComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PaymentComponent,
    PartnerComponent,
    AmortizationComponent,
    ProductComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class FrontOfficeModule { }
