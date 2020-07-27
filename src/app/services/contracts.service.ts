import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContractDto} from "../models/contractDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  url = "http://localhost:8080/contract"

  constructor(private http: HttpClient) {
  }

  getAllContracts(): Observable<Array<ContractDto>> {
    return this.http.get<Array<ContractDto>>(this.url + '/all');
  }

  getActiveContracts(): Observable<Array<ContractDto>> {
    return this.http.get<Array<ContractDto>>(this.url + '/active');
  }

  addContract(contract: ContractDto): Observable<ContractDto>{
    return this.http.post<ContractDto>(this.url, contract);
  }

  deleteContract(id): Observable<number>{
    return this.http.delete<number>(this.url + '/' + id);
  }

  getContractById(id): Observable<ContractDto>{
    return this.http.get<ContractDto>(this.url + '/' + id);
  }

}
