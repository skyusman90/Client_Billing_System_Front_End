import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Packages } from '../models/Packages';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  url="Packages";

  constructor(private http: HttpClient) { }

  public getAllPackagesDisplay(client_id?: number): Observable<Packages[]>{
    return this.http.get<Packages[]>(`${environment.apiUrl}/${this.url}?client_id=${client_id}`);
  }

  public getAllPackages(client_id: number, customer_name: string, package_name: string, activeInactive: string, orderby: string, ascDesc: string): Observable<Packages[]>{
    return this.http.get<Packages[]>(`${environment.apiUrl}/${this.url}/allpackages?client_id=${client_id}&customerNameSearch=${customer_name}&packageNameSearch=${package_name}&activeInactive=${activeInactive}&orderby=${orderby}&ascOrDesc=${ascDesc}`);
  }

  public getSinglePackage(package_id: number, client_id?: number): Observable<Packages[]>{
    client_id = Number(localStorage.getItem("client_id"));
    return this.http.get<Packages[]>(`${environment.apiUrl}/${this.url}/singlepackage?package_id=${package_id}&client_id=${client_id}`);
  }

  public AddPackage(newPackage: Packages): Observable<Packages[]>{
    newPackage.client_id = Number(localStorage.getItem("client_id"));
    return this.http.post<Packages[]>(`${environment.apiUrl}/${this.url}`, newPackage);
  }

  public updatePackage(newPackage: Packages): Observable<Packages[]>{
    return this.http.put<Packages[]>(`${environment.apiUrl}/${this.url}/updatepackage`, newPackage);
  }
  
  public updatePackageStatus(listIDs: string, package_status: string, client_id: number): Observable<Packages[]>{
    return this.http.put<Packages[]>(`${environment.apiUrl}/${this.url}/packagestatus?packageIds=${listIDs}&package_status=${package_status}&client_id=${client_id}`, {})
  }

  package: Packages = new Packages();

  public setPackage(newPackage: Packages){
    this.package = newPackage;
  }

  public getPackage(){
    return this.package;
  }
}
