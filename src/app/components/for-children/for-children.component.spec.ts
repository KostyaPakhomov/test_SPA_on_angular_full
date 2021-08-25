import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForChildrenComponent } from './for-children.component';

describe('ForChildrenComponent', () => {
  let component: ForChildrenComponent;
  let fixture: ComponentFixture<ForChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
