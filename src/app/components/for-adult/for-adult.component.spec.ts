import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAdultComponent } from './for-adult.component';

describe('ForAdultComponent', () => {
  let component: ForAdultComponent;
  let fixture: ComponentFixture<ForAdultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForAdultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForAdultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
