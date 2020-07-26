import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContractModel} from "../models/contract.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor(private http: HttpClient) {
  }

  getAllContracts(): Observable<Array<ContractModel>> {
    return this.http.get<Array<ContractModel>>('http://localhost:8080/contract/all');
  }
}

