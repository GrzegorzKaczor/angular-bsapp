import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsShowTableComponent } from './contracts-show-table/contracts-show-table.component';



@NgModule({
  declarations: [ContractsShowTableComponent],
  exports: [ContractsShowTableComponent],
  imports: [
    CommonModule
  ]
})
export class ShareModule { }
