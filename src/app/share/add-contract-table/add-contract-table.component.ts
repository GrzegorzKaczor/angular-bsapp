import {Component, OnInit} from '@angular/core';
import {ContractsService} from "../../services/contracts.service";
import {ContractDto} from "../../models/contractDto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-contract-table',
  templateUrl: './add-contract-table.component.html',
  styleUrls: ['./add-contract-table.component.css']
})
export class AddContractTableComponent implements OnInit {

  contract = new ContractDto();

  constructor(private contractService: ContractsService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onsubmit(data) {
    this.mapDataToContract(data);
    console.log(this.contract);
    this.contractService.addContract(this.contract).subscribe(cont =>
    console.log(cont));
    this.router.navigate(['allContracts']);
  }

  mapDataToContract(data) {
    this.contract.systemDto = data.systemDto;
    this.contract.orderNumber = data.orderNumber;
    this.contract.fromDate = data.fromDate;
    this.contract.toDate = data.toDate;
    this.contract.amount = (data.amount * 100).valueOf();
    this.contract.amountType = data.amountType;
    this.contract.amountPeriod = data.amountPeriod;
    this.contract.active = data.active;
  }




}
