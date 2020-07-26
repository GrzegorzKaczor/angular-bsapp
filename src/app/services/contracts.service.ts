import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContractDto} from "../models/contractDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor(private http: HttpClient) {
  }

  getAllContracts(): Observable<Array<ContractDto>> {
    return this.http.get<Array<ContractDto>>('http://localhost:8080/contract/all');
  }

  getActiveContracts(): Observable<Array<ContractDto>> {
    return this.http.get<Array<ContractDto>>('http://localhost:8080/contract/active');
  }

  addContract(contract: ContractDto): Observable<ContractDto>{
    console.log(contract)
    return this.http.post<ContractDto>("http://localhost:8080/contract", contract);
  }
}
