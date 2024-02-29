import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payments } from '../models/Payments';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  url="Payments";

  constructor(private http: HttpClient) { }

  public getAllPaymentsDisplay(client_id: number): Observable<Payments[]>{
    return this.http.get<Payments[]>(`${environment.apiUrl}/${this.url}/getAllPaymentsDisplay?client_id=${client_id}`);
  }

  public getAllPayments(client_id: number, payment_title: string, paidUnpaid: string, orderby: string, ascOrDesc: string, startDate: string, endDate: string, customer_id: number): Observable<Payments[]>{
    return this.http.get<Payments[]>(`${environment.apiUrl}/${this.url}/getallpayments?client_id=${client_id}&Payment_title=${payment_title}&Paid_UnPaid=${paidUnpaid}&orderby=${orderby}&ascOrDesc=${ascOrDesc}&StartDate=${startDate}&EndDate=${endDate}&customer_id=${customer_id}`)
  }

  public getSinglePayment(payment_id: number, client_id?: number): Observable<Payments[]>{
    client_id = Number(localStorage.getItem("client_id"));
    return this.http.get<Payments[]>(`${environment.apiUrl}/${this.url}/paymentbyid?payment_id=${payment_id}&client_id=${client_id}`);
  }

  public insertPayment(newPayment: Payments): Observable<Payments[]>{
    newPayment.client_id = Number(localStorage.getItem("client_id"));
    return this.http.post<Payments[]>(`${environment.apiUrl}/${this.url}`, newPayment);
  }

  public updatePayments(newPayment: Payments): Observable<Payments[]>{
    return this.http.put<Payments[]>(`${environment.apiUrl}/${this.url}/updatepayment`, newPayment);
  }

  public updatePaymentsStatus(listIds: string, payment_status: string, client_id: number): Observable<Payments[]>{
    return this.http.put<Payments[]>(`${environment.apiUrl}/${this.url}/updatepaymentstatus?ListOfPayment_ids=${listIds}&payment_status=${payment_status}&client_id=${client_id}`, {})
  }

  payment: Payments = new Payments();

  public setPayment(newPayment: Payments){
    this.payment = newPayment;
  }
  
  public getPayment(){
    return this.payment;
  }
}
