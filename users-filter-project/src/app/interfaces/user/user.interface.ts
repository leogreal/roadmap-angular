import { IAddress } from "./address.interface";
import { IStatus } from "./status.interface";

export interface IUser {
  name: string;
  email: string;
  password: string;
  age: number;
  address: IAddress;
  phone: string;
  active: boolean;
  role: string;
  registrationDate: string; // ISO date string
  status: IStatus;
}
