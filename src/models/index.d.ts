import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Employee {
  readonly id: string;
  readonly empid?: number;
  readonly empName?: string;
  readonly position?: string;
  readonly joindate?: string;
  readonly totalworkdays?: number;
  readonly avgannualsal?: number;
  readonly avgsalthrmonth?: number;
  readonly currentmonthpension?: number;
  readonly Year2018?: number;
  readonly Year2019?: number;
  readonly Year2020?: number;
  readonly Year2021Nov?: number;
  readonly totalPension?: number;
  readonly pensionHolder?: boolean;
  readonly team?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Employee, EmployeeMetaData>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}