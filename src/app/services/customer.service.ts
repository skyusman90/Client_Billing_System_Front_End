import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../models/Customers';
import { environment } from '../../environments/environment';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url='Customers'

  constructor(private http: HttpClient, private clientService: ClientService) { }

  public getCustomersDisplay(client_id?: number): Observable<Customers[]>{ //get all customers for displaying
    return this.http.get<Customers[]>(`${environment.apiUrl}/${this.url}?client_id=${client_id}`);
  }

  public getCustomers(customer: Customers): Observable<Customers[]>{ //get customers for the logged in client
    customer.client_id = Number(localStorage.getItem("client_id"));;
    return this.http.get<Customers[]>(`${environment.apiUrl}/${this.url}/getcustomerbyid?customer_id=${customer.customer_id}&client_id=${customer.client_id}`);
  }

  public insertCustomer(newCustomer: Customers): Observable<Customers[]>{ //registeration method for customers
    newCustomer.client_id = Number(localStorage.getItem("client_id"));
    return this.http.post<Customers[]>(`${environment.apiUrl}/${this.url}`, newCustomer);
  }

  public getAllCustomers(client_id: number, customer_name_search: string, activeInactive: string, orderby: string, ascOrDesc: string): Observable<Customers[]>{ //search method for customers
    console.log(client_id, customer_name_search, activeInactive, orderby, ascOrDesc);
    return this.http.get<Customers[]>(`https://localhost:7039/api/Customers/getallcustomers?client_id=${client_id}&CustomerNameSearch=${customer_name_search}&activeInactive=${activeInactive}&order_by=${orderby}&asc_desc=${ascOrDesc}`);
  }

  public updateCustomer(newCustomer: Customers): Observable<Customers[]>{ //method to update whole customer
    return this.http.put<Customers[]>(`${environment.apiUrl}/${this.url}/customer`, newCustomer)
  }

  public updateCustomerStatus(list_ids: string, customer_status: string, client_id: number): Observable<Customers[]>{ //method to update customer status
    return this.http.put<Customers[]>(`${environment.apiUrl}/${this.url}/customerstatus?listOfCustomerIds=${list_ids}&customer_status=${customer_status}&client_id=${client_id}`, {})
  }

  customer: Customers = new Customers(); //customer object for update methods

  public setCustomer(newCustomer: Customers){ //set method for customer
    this.customer = newCustomer;
  }

  public getCustomer(){ //get method for customer
    return this.customer;
  }
}
