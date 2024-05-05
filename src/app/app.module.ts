import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartnerComponent } from './partner/partner.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { BodyComponent } from './BackOffice/body/body.component';
import { FooterbackComponent } from './BackOffice/footerback/footerback.component';
import { HeaderbackComponent } from './BackOffice/headerback/headerback.component';
import { NavbarComponent } from './BackOffice/navbar/navbar.component';
import { SidebarComponent } from './BackOffice/sidebar/sidebar.component';
import { AllTemplatefrontComponent } from './FrontOffice/all-templatefront/all-templatefront.component';
import { BodyfrontComponent } from './FrontOffice/bodyfront/bodyfront.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { AmortizationComponent } from './amortization/amortization.component';
import { PaymentComponent } from './payment/payment.component';
import { BackOfficeModule } from './back-office/back-office.module';
import { FrontOfficeModule } from './front-office/front-office.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PartnerComponent,
    AllTemplateBackComponent,
    BodyComponent,
    FooterbackComponent,
    HeaderbackComponent,
    NavbarComponent,
    SidebarComponent,
    AllTemplatefrontComponent,
    BodyfrontComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    AmortizationComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BackOfficeModule,
    FrontOfficeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
