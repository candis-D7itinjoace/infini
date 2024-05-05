import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficeRootComponent } from './back-office-root.component';

describe('BackOfficeRootComponent', () => {
  let component: BackOfficeRootComponent;
  let fixture: ComponentFixture<BackOfficeRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackOfficeRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackOfficeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
