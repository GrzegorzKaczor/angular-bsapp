import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContractTableComponent } from './add-contract-table.component';

describe('AddContractTableComponent', () => {
  let component: AddContractTableComponent;
  let fixture: ComponentFixture<AddContractTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContractTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContractTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
