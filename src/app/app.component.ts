import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductService } from './services/product.service';
import { PartnerService } from './services/partner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService,
    PartnerService
  ]
})
export class AppComponent {
 
  title = 'infini3.2';
}
