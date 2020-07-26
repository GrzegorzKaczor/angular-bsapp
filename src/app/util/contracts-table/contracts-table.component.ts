import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.css']
})
export class ContractsTableComponent implements OnInit {


  @Input()
  public contracts;

  constructor() { }

  ngOnInit(): void {
  }

}
