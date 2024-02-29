import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/Customers';
import { Packages } from 'src/app/models/Packages';
import { Payments } from 'src/app/models/Payments';
import { CustomerService } from 'src/app/services/customer.service';
import { PackagesService } from 'src/app/services/packages.service';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-view-payments',
  templateUrl: './view-payments.component.html',
  styleUrl: './view-payments.component.scss'
})
export class ViewPaymentsComponent implements OnInit{

  constructor(private paymentService: PaymentsService, private packageService: PackagesService, private customerService: CustomerService){}

  allPayments: Payments[] = [];
  tempCustomer: Customers = new Customers();

  ngOnInit(): void{
    var client_id = Number(localStorage.getItem("client_id"));
    this.paymentService.getAllPaymentsDisplay(client_id).subscribe((result: Payments[])=>{
      this.allPayments = result;
      this.tempCustomer.client_id = client_id;
      for(let i = 0; i < this.allPayments.length; i++){
        this.packageService.getSinglePackage(this.allPayments[i].package_id!, client_id).subscribe((result: Packages[])=>{
          this.allPayments[i].package_name = result[0].package_name;
        });
        this.tempCustomer.customer_id = this.allPayments[i].customer_id;
        this.customerService.getCustomers(this.tempCustomer).subscribe((result: Customers[])=>{
          this.allPayments[i].customer_name = result[0].customer_name;
        });
      }
    });
  }

  allPayments2: Payments[] = [];
  paymentToUpdate: Payments = new Payments();
  paymentUpdateID?: string;

  updatePaymentStatus(newPayment: Payments, state: boolean, status: string){
    if(state){
      this.paymentToUpdate = newPayment;
      this.paymentService.setPayment(this.paymentToUpdate);
  
      this.paymentUpdateID = this.paymentToUpdate.payment_id?.toString();
  
      if(this.paymentToUpdate.payment_status == 'Y'){
        this.paymentToUpdate.payment_status = 'N';
      }
      else{
        this.paymentToUpdate.payment_status = 'Y';
      }
  
      this.paymentService.updatePaymentsStatus(this.paymentUpdateID!, this.paymentToUpdate.payment_status!, this.paymentToUpdate.client_id!).
      subscribe((result: Payments[]) => {
        this.allPayments2 = result;
      })
    }
    else{
      this.paymentToUpdate = newPayment;
      this.paymentService.setPayment(this.paymentToUpdate);

      this.paymentUpdateID = this.paymentToUpdate.payment_id?.toString();

      this.paymentToUpdate.payment_status = status;

      this.paymentService.updatePaymentsStatus(this.paymentUpdateID!, this.paymentToUpdate.payment_status!, this.paymentToUpdate.client_id!).
      subscribe((result: Payments[]) => {
        this.allPayments2 = result;
    })
    }
  }

  editPayment(newPayment: Payments){
    this.paymentToUpdate = newPayment;
    this.paymentService.setPayment(this.paymentToUpdate);
  }

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  onTableDataChange(event: any){
    this.page = event;
    var client_id = Number(localStorage.getItem("client_id"));
    this.paymentService.getAllPaymentsDisplay(client_id).subscribe((result: Payments[])=>(this.allPayments = result));
  }

  selectAll: boolean = false;

  toggleCheckBox(){
    if(this.isAllCheckBoxesSelected()){
      this.selectAll = true;
    }
    else{
      this.selectAll = false;
    }   
  }

  toggleSelectAll(){
    console.log(this.selectAll);
    this.allPayments.forEach((pay) => pay.selected = this.selectAll);
  }

  isAllCheckBoxesSelected(){
    return this.allPayments.every((pay) => pay.selected);
  }

  listOfIds: string = "";

  markActive(){
    this.allPayments.forEach((pay) => {
      if(pay.selected){
        this.listOfIds = this.listOfIds + "," + pay.payment_id;
      }
      console.log(this.listOfIds);
    });
    var clientId = Number(localStorage.getItem("client_id"));
    this.paymentService.updatePaymentsStatus(this.listOfIds, 'Y', clientId).subscribe((result: Payments[]) => {
      this.allPayments2 = result;
      window.location.reload();
    });
  }
  
  markInActive(){
    this.allPayments.forEach((pay) => {
      if(pay.selected){
        this.listOfIds = this.listOfIds + "," + pay.payment_id;
      }
    });
    var clientId = Number(localStorage.getItem("client_id"));
    this.paymentService.updatePaymentsStatus(this.listOfIds, 'N', clientId).subscribe((result: Payments[]) => {
      this.allPayments2 = result;
      window.location.reload();
    });
  }

}
