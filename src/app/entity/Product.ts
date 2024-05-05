import { Partner } from './Partner';
import { Client } from './Client';
//import {ProductType} from './ProductType';
export enum ProductType {
  CAR = 'CAR',
  REAL_ESTATE = 'REAL_ESTATE',
  FIELD = 'FIELD'
}

export class Product {
    productId: number;
    productName: string;
    description: string;
    valueProduct: number;
    valueEXC: number;
    isAvailable: string;
    partner: Partner;
    productType: ProductType;
    productOwner: Client;
  
    constructor(
      productId: number,
      productName: string,
      description: string,
      valueProduct: number,
      valueEXC: number,
      isAvailable: string,
      partner: Partner,
      productType: ProductType,
      productOwner: Client
    ) {
      this.productId = productId;
      this.productName = productName;
      this.description = description;
      this.valueProduct = valueProduct;
      this.valueEXC = valueEXC;
      this.isAvailable = isAvailable;
      this.partner = partner;
      this.productType = productType;
      this.productOwner = productOwner;
    }
  
    // other methods...
  
    // getters and setters...
  }