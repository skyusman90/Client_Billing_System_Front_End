import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customers } from 'src/app/models/Customers';
import { Packages } from 'src/app/models/Packages';
import { CustomerService } from 'src/app/services/customer.service';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.scss'
})
export class AddCustomerComponent implements OnInit{
  title="add-customer";

  constructor(private customerService: CustomerService, private toastr: ToastrService, private router: Router, private packageService: PackagesService){}

  newCustomer: Customers = new Customers();
  allCustomers: Customers[] = [];

  allPackages: Packages[] = [];

  ngOnInit(): void {
    var client_id = Number(localStorage.getItem("client_id"));
    this.packageService.getAllPackagesDisplay(client_id).subscribe((result: Packages[])=>{
      this.allPackages = result;
    });
  }

  RegisterCustomer(){
    this.customerService.insertCustomer(this.newCustomer).subscribe((result: Customers[]) => (this.allCustomers = result));
    this.toastr.success("Customer is successfully added");
    this.router.navigateByUrl("/customers");
  }

  package_id?: number;

  OnSelected(value?: string){
    console.log(value);
    for(let i = 0; i < this.allPackages.length; i++){
      if(this.allPackages[i].package_name == value){
        value = this.allPackages[i].package_id?.toString();
      }
    }
    this.newCustomer.package_id = Number(value);
  }
}
