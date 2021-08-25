import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithPetsComponent } from './with-pets.component';

describe('WithPetsComponent', () => {
  let component: WithPetsComponent;
  let fixture: ComponentFixture<WithPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithPetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
