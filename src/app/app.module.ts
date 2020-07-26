import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {RouterModule, Routes} from "@angular/router";
import {AllContractsComponent} from './content/all-contracts/all-contracts.component';
import {ActiveContractsComponent} from './content/active-contracts/active-contracts.component';
import {SystemsComponent} from './content/systems/systems.component';
import {ContentModule} from "./content/content.module";
import {AboutComponent} from "./content/about/about.component";
import {WelcomeComponent} from "./content/welcome/welcome.component";
import {AddContractComponent} from './content/add-contract/add-contract.component';
import {HttpClientModule} from "@angular/common/http";

export const appRouters: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'allContracts', component: AllContractsComponent},
  {path: 'activeContracts', component: ActiveContractsComponent},
  {path: 'systems', component: SystemsComponent},
  {path: 'addContract', component: AddContractComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: WelcomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ContentModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
