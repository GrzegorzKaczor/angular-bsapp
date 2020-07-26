import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contracts-show-table',
  templateUrl: './contracts-show-table.component.html',
  styleUrls: ['./contracts-show-table.component.css']
})
export class ContractsShowTableComponent implements OnInit {


  @Input()
  public contracts;

  constructor() { }

  ngOnInit(): void {
  }

}
