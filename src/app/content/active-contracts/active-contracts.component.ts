import { Component, OnInit } from '@angular/core';
import {ContractsService} from "../../services/contracts.service";

@Component({
  selector: 'app-active-contracts',
  templateUrl: './active-contracts.component.html',
  styleUrls: ['./active-contracts.component.css']
})
export class ActiveContractsComponent implements OnInit {

  public activeContracts;

  constructor(private contractService: ContractsService) { }

  ngOnInit(): void {
    this.contractService.getActiveContracts().subscribe(contracts =>
      this.activeContracts = contracts);
  }

}
