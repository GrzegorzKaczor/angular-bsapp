import { SystemDtoModel } from './systemDto.model';
import {AmountTypeEnum} from "./amountType.enum";
import {AmountPeriodEnum} from "./amountPeriod.enum";


export class ContractDto {
  id: number;
  systemDto: SystemDtoModel;
  orderNumber: string;
  fromDate: Date;
  toDate: Date;
  amount: number;
  amountType: AmountTypeEnum;
  amountPeriod: AmountPeriodEnum;
  active: boolean;
}
