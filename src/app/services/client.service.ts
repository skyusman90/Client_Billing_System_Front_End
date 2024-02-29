import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Clients } from '../models/Clients';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url="Clients"; //name of client controller in back end api
  authURL="Auth"; //name of login controller in back end api

  constructor(private http: HttpClient){}

  public getClient(): Observable<Clients[]>{ //getAllClients
    return this.http.get<Clients[]>(`${environment.apiUrl}/${this.url}`);
  }

  public insertClient(newClient: Clients): Observable<Clients[]>{ //registeration method
    newClient.client_id = 0;
    return this.http.post<Clients[]>(`${environment.apiUrl}/${this.url}`, newClient);
  }

  public logClient(newLogin: Login): Observable<string> { //login or sigin method
    const url = `${environment.apiUrl}/${this.authURL}/loginclient?Username=${newLogin.username}&Password=${newLogin.password}`;
    return this.http.post(url, newLogin, { responseType: 'text'}); //changed the response type to text
  }

  public getClientByUsername(login: Login): Observable<Clients[]>{ //getClient by username method
    return this.http.get<Clients[]>(`${environment.apiUrl}/${this.url}/getclientbyusername?username=${login.username}`);
  }

  public getClientById(client: Clients): Observable<Clients[]>{ //getClient by Id method
    return this.http.get<Clients[]>(`${environment.apiUrl}/${this.url}/getclientbyid?id=${client.client_id}`)
  }

  public updateClients(newClient: Clients): Observable<Clients[]>{ //update whole client method
    return this.http.put<Clients[]>(`${environment.apiUrl}/${this.url}/client`, newClient);
  }

  LoginClient: Login = { //Login Object for set and get methods
    username: '',
    password: '',
    result: true,
    message: ''
  }

  public setClient(loginClient: Login){ //set login mehtod
    this.LoginClient = loginClient;
  }
  public getLoginClient(){ //get login method
    return this.LoginClient;
  }

  public updateClientStatus(listIds: string, client_status: string): Observable<Clients[]>{ //update client status method
    return this.http.put<Clients[]>(`${environment.apiUrl}/${this.url}/clientstatus?clientids=${listIds}&client_status=${client_status}`, {});
  }

  public updateClientPassword(client_id: number, client_username: string, new_password: string, old_password: string): Observable<Clients[]>{ //update client password method
    return this.http.put<Clients[]>(`${environment.apiUrl}/${this.url}/clientpassword?client_id=${client_id}&client_username=${client_username}&client_new_password=${new_password}&client_old_password=${old_password}`, {});
  }

  client: Clients = new Clients(); //Client object for set and get used for update methods

  public setUpdateClient(newClient: Clients){ //set client for update
    this.client = newClient;
  }

  public getUpdateClient(){ //get client for update
    return this.client;
  }

  client_id?: number; //client id declaration
  public setClientID(cl_id?: number){ //set client id for update status method
    this.client_id = cl_id;
  }
  
  public getClientID(){ //get client id for update status method
    return this.client_id;
  }
}
