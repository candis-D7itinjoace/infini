import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../entity/Client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  
  private baseUrl = 'http://localhost:8085/clients'; // L'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client);
  }

  getClientById(clientId: number): Observable<Client> {
    const url = `${this.baseUrl}/${clientId}`;
    return this.http.get<Client>(url);
  }
  getClientData(clientId: number): Observable<Client> {
    return this.getClientById(clientId);
  }
}
