import { SystemDto } from './systemDto';
import {AmountTypeEnum} from "./amountType.enum";
import {AmountPeriodEnum} from "./amountPeriod.enum";


export class ContractDto {
  id: number;
  systemDto: SystemDto;
  orderNumber: string;
  fromDate: Date;
  toDate: Date;
  amount: number;
  amountType: AmountTypeEnum;
  amountPeriod: AmountPeriodEnum;
  active: boolean;
}
