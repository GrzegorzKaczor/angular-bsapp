import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {RouterModule, Routes} from "@angular/router";
import { AllContractsComponent } from './all-contracts/all-contracts.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ActiveContractsComponent } from './active-contracts/active-contracts.component';
import { SystemsComponent } from './systems/systems.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { AboutComponent } from './about/about.component';

export const appRouters: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'allContracts', component: AllContractsComponent},
  {path: 'activeContracts', component: ActiveContractsComponent},
  {path: 'systems', component: SystemsComponent},
  {path: 'addContract', component: AddContractComponent},
  {path: 'about', component: AboutComponent},
  {path: "**", component: WelcomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AllContractsComponent,
    WelcomeComponent,
    ActiveContractsComponent,
    SystemsComponent,
    AddContractComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
