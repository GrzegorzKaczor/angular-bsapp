import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContractsService} from "../../services/contracts.service";
import {ContractDto} from "../../models/contractDto";

@Component({
  selector: 'app-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.css']
})
export class UpdateContractComponent implements OnInit {

  id: number;
  public contract;

  constructor(private route: ActivatedRoute,
              private contractService: ContractsService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.contract = new ContractDto();

    this.contractService.getContractById(this.id).subscribe(data =>{
    console.log(data)
    this.contract = data;
    })

    console.log("to jest kontract " + this.contract);
  }

}
