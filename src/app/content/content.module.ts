import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AddContractComponent} from "./add-contract/add-contract.component";
import {ActiveContractsComponent} from "./active-contracts/active-contracts.component";
import {SystemsComponent} from "./systems/systems.component";
import {AllContractsComponent} from "./all-contracts/all-contracts.component";
import {UtilModule} from "../util/util.module";


@NgModule({
  declarations: [AboutComponent, WelcomeComponent, AddContractComponent, ActiveContractsComponent, SystemsComponent, AllContractsComponent],
  exports: [AboutComponent, WelcomeComponent, AddContractComponent, ActiveContractsComponent, SystemsComponent, AllContractsComponent],
  imports: [
    CommonModule,
    UtilModule
  ]
})
export class ContentModule { }