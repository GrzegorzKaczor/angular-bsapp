import {Component, Input, OnInit} from '@angular/core';
import {ContractsService} from "../../services/contracts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contracts-show-table',
  templateUrl: './contracts-show-table.component.html',
  styleUrls: ['./contracts-show-table.component.css']
})
export class ContractsShowTableComponent implements OnInit {


  @Input()
  public contracts;

  constructor(private contractService: ContractsService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  deleteContract(id) {
    this.contractService.deleteContract(id).subscribe(data =>
      this.router.navigate(['allContracts']));
  }

  updateContract(id){
    this.router.navigate(['update', id]);
  }

}
