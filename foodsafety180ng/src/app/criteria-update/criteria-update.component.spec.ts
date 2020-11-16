import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaUpdateComponent } from './criteria-update.component';

describe('CriteriaUpdateComponent', () => {
  let component: CriteriaUpdateComponent;
  let fixture: ComponentFixture<CriteriaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
