import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContractsService} from "../../services/contracts.service";
import {ContractModel} from "../../models/contract.model";

@Component({
  selector: 'app-all-contracts',
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.css']
})
export class AllContractsComponent implements OnInit {

  public allContracts;

  constructor(private contractService: ContractsService) {
  }

  ngOnInit(): void {
    this.contractService.getAllContracts().subscribe(contracts =>
      this.allContracts = contracts);
  }
}
