import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsShowTableComponent } from './contracts-show-table.component';

describe('ContractsTableComponent', () => {
  let component: ContractsShowTableComponent;
  let fixture: ComponentFixture<ContractsShowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsShowTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsShowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
