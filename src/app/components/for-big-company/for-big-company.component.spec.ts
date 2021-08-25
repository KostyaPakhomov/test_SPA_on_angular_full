import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForBigCompanyComponent } from './for-big-company.component';

describe('ForBigCompanyComponent', () => {
  let component: ForBigCompanyComponent;
  let fixture: ComponentFixture<ForBigCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForBigCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForBigCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
