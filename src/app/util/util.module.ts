import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsTableComponent } from './contracts-table/contracts-table.component';



@NgModule({
  declarations: [ContractsTableComponent],
  exports: [ContractsTableComponent],
  imports: [
    CommonModule
  ]
})
export class UtilModule { }
