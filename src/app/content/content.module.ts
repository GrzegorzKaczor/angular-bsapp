import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AddContractComponent} from "./add-contract/add-contract.component";
import {ActiveContractsComponent} from "./active-contracts/active-contracts.component";
import {SystemsComponent} from "./systems/systems.component";
import {AllContractsComponent} from "./all-contracts/all-contracts.component";
import {ShareModule} from "../share/share.module";
import {ContractsService} from "../services/contracts.service";
import { UpdateContractComponent } from './update-contract/update-contract.component';


@NgModule({
  declarations: [AboutComponent, WelcomeComponent, AddContractComponent, ActiveContractsComponent, SystemsComponent, AllContractsComponent, UpdateContractComponent],
  exports: [AboutComponent, WelcomeComponent, AddContractComponent, ActiveContractsComponent, SystemsComponent, AllContractsComponent, UpdateContractComponent],
  imports: [
    CommonModule,
    ShareModule
  ],
  providers: [ContractsService]
})
export class ContentModule {
}
