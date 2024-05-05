import { Product } from './Product';
import { DueDate } from './DueDate';

export class Client {
  idClient: number;
  ClientName: string;
  ClientEmail: string;
  NetIncome: number;
  Credit_authorization: boolean;
  product: Product;
  dueDate: DueDate;

  constructor(
    idClient: number,
    ClientName: string,
    ClientEmail: string,
    NetIncome: number,
    Credit_authorization: boolean,
    product: Product,
    dueDate: DueDate
  ) {
    this.idClient = idClient;
    this.ClientName = ClientName;
    this.ClientEmail = ClientEmail;
    this.NetIncome = NetIncome;
    this.Credit_authorization = Credit_authorization;
    this.product = product;
    this.dueDate = dueDate;
  }

  // other methods...

  // getters and setters...
}
