import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customers } from 'src/app/models/Customers';
import { Packages } from 'src/app/models/Packages';
import { CustomerService } from 'src/app/services/customer.service';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.scss'
})
export class UpdateCustomerComponent implements OnInit{
  title="update-customer";

  constructor(private customerService: CustomerService, private toastr: ToastrService, private router: Router, private packageService: PackagesService){}

  allPackages: Packages[] = [];

  ngOnInit(): void {
    var client_id = Number(localStorage.getItem("client_id"));
    this.packageService.getAllPackagesDisplay(client_id).subscribe((result: Packages[])=>(this.allPackages = result));
  }

  allCustomers: Customers[] = [];
  newCustomer = this.customerService.getCustomer();

  updateCustomer(){
    console.log(this.newCustomer);
    return this.customerService.updateCustomer(this.newCustomer).subscribe((
      result: Customers[]
    ) => {
      this.allCustomers = result;
      if(this.allCustomers.length == 0){
        this.toastr.error("No Customer exists.");
      }
      else{
        this.toastr.success("Customer has been updated");
      }
      this.router.navigateByUrl('/customers');
    })
  }

  OnSelected(value?: string){
    for(let i = 0; i < this.allPackages.length; i++){
      if(this.allPackages[i].package_name == value){
        value = this.allPackages[i].package_id?.toString();
      }
    }
    this.newCustomer.package_id = Number(value);
  }
}
