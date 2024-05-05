import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bodyfront',
  templateUrl: './bodyfront.component.html',
  styleUrls: ['./bodyfront.component.css']
})
export class BodyfrontComponent {
  @ViewChild('servicesSection') servicesSection!: ElementRef;
  constructor() { }

  scrollToServices() {
    if (this.servicesSection) {
      this.servicesSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
