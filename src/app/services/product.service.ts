import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { Product } from '../entity/Product';
import { Client } from '../entity/Client';
import { Partner } from '../entity/Partner';
import { FormGroup } from '@angular/forms';
import{ClientService} from './client.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly baseUrl = 'http://localhost:8085/products'; // L'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+'/get');
  }

  getProductById(productId: number): Observable<Product> {
    const url = `${this.baseUrl+'/getbyid'}/${productId}`;
    return this.http.get<Product>(url);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl+'/create', product);
  }

  deleteProduct(productId: number): Observable<void> {
    const url = `${this.baseUrl+'/delete'}/${productId}`;
    return this.http.delete<void>(url);
  }

  saveOrUpdateProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl+'/saveOrUpdate'}`;
    return this.http.post<Product>(url, product);
  }

  updateProduct(product: Product, partnerId: number): Observable<Product> {
    const url = `${this.baseUrl}/updateProduct/${partnerId}`;
    return this.http.put<Product>(url, product);
  }
  generateProductPDFReport(): Observable<Blob> {
    return this.http.get(`${this.baseUrl+'/PDF'}`, { responseType: 'blob' });
  }

  buyProduct(clientId: number, productId: number, periode: number): Observable<boolean> {
    const url = `${this.baseUrl+'/buy/'}${clientId}/${productId}/${periode}`;
    return this.http.post<boolean>(url, null); // Vous pouvez envoyer null car les données sont envoyées dans l'URL
  }

}
