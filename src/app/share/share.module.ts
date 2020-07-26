import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsShowTableComponent } from './contracts-show-table/contracts-show-table.component';
import { AddContractTableComponent } from './add-contract-table/add-contract-table.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ContractsShowTableComponent, AddContractTableComponent],
  exports: [ContractsShowTableComponent, AddContractTableComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShareModule { }
