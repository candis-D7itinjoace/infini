import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontOfficeRootComponent } from './front-office-root.component';

describe('FrontOfficeRootComponent', () => {
  let component: FrontOfficeRootComponent;
  let fixture: ComponentFixture<FrontOfficeRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontOfficeRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontOfficeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
