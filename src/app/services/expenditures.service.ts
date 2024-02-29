import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expenditures } from '../models/Expenditures';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpendituresService {
  url="Expenditures";

  constructor(private http: HttpClient) { }

  public AddExpenditure(newExpenditure: Expenditures): Observable<Expenditures[]>{
    newExpenditure.client_id = Number(localStorage.getItem("client_id"));
    return this.http.post<Expenditures[]>(`${environment.apiUrl}/${this.url}`, newExpenditure);
  }

  public getAllExpendituresDisplay(client_id: number): Observable<Expenditures[]>{
    return this.http.get<Expenditures[]>(`${environment.apiUrl}/${this.url}?client_id=${client_id}`);
  }

  public getAllExpenditures(client_id: number, exp_title: string, paidUnPaid: string, orderby: string, ascDesc: string, startDate: string, endDate: string): Observable<Expenditures[]>{
    return this.http.get<Expenditures[]>(`${environment.apiUrl}/${this.url}/getallexpenitures?client_id=${client_id}&exp_title=${exp_title}&paidUnPaid=${paidUnPaid}&orderby=${orderby}&ascOrDesc=${ascDesc}&StartDate=${startDate}&EndDate=${endDate}`);
  }

  public getSingleExpenditures(expenditure_id: number, client_id?: number): Observable<Expenditures[]>{
    client_id =  Number(localStorage.getItem("client_id"));
    return this.http.get<Expenditures[]>(`${environment.apiUrl}/${this.url}/getsingleexpeniture?expenditure_id=${expenditure_id}&client_id=${client_id}`);
  }

  public updateExpenditure(newExpenditure: Expenditures): Observable<Expenditures[]>{
    return this.http.put<Expenditures[]>(`${environment.apiUrl}/${this.url}/updateexpenditure`, newExpenditure);
  }

  public updateExpenditureStatus(listIDs: string, exp_status: string, client_id: number): Observable<Expenditures[]>{
    return this.http.put<Expenditures[]>(`${environment.apiUrl}/${this.url}/updateexpenditurebyid?ListofIds=${listIDs}&expenditure_status=${exp_status}&client_id=${client_id}`, {});
  }

  expenditure: Expenditures = new Expenditures();

  public setExpenditure(newExp: Expenditures){
    this.expenditure = newExp;
  }

  public getExpenditure(){
    return this.expenditure;
  }
}
