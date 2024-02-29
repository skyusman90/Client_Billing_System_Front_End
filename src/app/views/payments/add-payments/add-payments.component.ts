import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customers } from 'src/app/models/Customers';
import { Packages } from 'src/app/models/Packages';
import { Payments } from 'src/app/models/Payments';
import { CustomerService } from 'src/app/services/customer.service';
import { PackagesService } from 'src/app/services/packages.service';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-add-payments',
  templateUrl: './add-payments.component.html',
  styleUrl: './add-payments.component.scss'
})
export class AddPaymentsComponent implements OnInit{
  title="insert-payment";

  constructor(private paymentService: PaymentsService, private router: Router, private toastr: ToastrService, private packageService: PackagesService, private customerService: CustomerService){}

  allPayments: Payments[] = [];
  newPayment: Payments = new Payments();
  allPackages: Packages[] = [];
  allCustomers: Customers[] = [];

  ngOnInit(): void {
    var client_id = Number(localStorage.getItem("client_id"));
    this.packageService.getAllPackagesDisplay(client_id).subscribe((result: Packages[])=>{
      this.allPackages = result;
    });
    this.customerService.getCustomersDisplay(client_id).subscribe((result: Customers[])=>(this.allCustomers = result));
  }

  addPayment(){
    this.paymentService.insertPayment(this.newPayment).subscribe((result: Payments[])=>(this.allPayments = result));
    this.toastr.success("Payment is successfully added");
    this.router.navigateByUrl("/payments");
  }

  OnSelected(value?: string){
    console.log(value);
    for(let i = 0; i < this.allPackages.length; i++){
      if(this.allPackages[i].package_name == value){
        value = this.allPackages[i].package_id?.toString();
      }
    }
    this.newPayment.package_id = Number(value);
  }

  OnSelectedCustomerName(value?: string){
    console.log(value);
    for(let i = 0; i < this.allCustomers.length; i++){
      if(this.allCustomers[i].customer_name == value){
        value = this.allCustomers[i].customer_id?.toString();
      }
    }
    this.newPayment.customer_id = Number(value);
  }
}
