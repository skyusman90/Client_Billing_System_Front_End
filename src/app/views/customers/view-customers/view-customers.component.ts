import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/models/Customers'
import { Packages } from 'src/app/models/Packages';
import { CustomerService } from 'src/app/services/customer.service'
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrl: './view-customers.component.scss'
})
export class ViewCustomersComponent implements OnInit{

  allCustomers: Customers[] = [];

  constructor(private customerService: CustomerService, private packageService: PackagesService){}

  ngOnInit(): void {
    var client_id = Number(localStorage.getItem("client_id"));
    this.customerService.getCustomersDisplay(client_id).subscribe((result: Customers[])=>{
      this.allCustomers = result;
      for(let i = 0; i < this.allCustomers.length; i++){
        this.packageService.getSinglePackage(this.allCustomers[i].package_id!, client_id).subscribe((result: Packages[])=>{
          this.allCustomers[i].package_name = result[0].package_name;
          console.log(this.allCustomers[i].package_name);
        });
      }
    });
  }

  customerToUpdate: Customers = new Customers();
  allCustomers2: Customers[] = [];
  customerUpdateID?: string;

  updateCustomerStatus(newCustomer: Customers, state: boolean, status: string){
    if(state){
      this.customerToUpdate = newCustomer;
      this.customerService.setCustomer(this.customerToUpdate);

      this.customerUpdateID = this.customerToUpdate.customer_id?.toString();

      if(this.customerToUpdate.customer_status == 'Y'){
        this.customerToUpdate.customer_status = 'N';
      }
      else{
        this.customerToUpdate.customer_status = 'Y';
      }

      this.customerService.updateCustomerStatus(this.customerUpdateID!, this.customerToUpdate.customer_status!, this.customerToUpdate.client_id!).
      subscribe((result: Customers[]) => {
        this.allCustomers2 = result;
      })
    }
    else{
      this.customerToUpdate = newCustomer;
      this.customerService.setCustomer(this.customerToUpdate);

      this.customerUpdateID = this.customerToUpdate.customer_id?.toString();

      this.customerToUpdate.customer_status = status;

      this.customerService.updateCustomerStatus(this.customerUpdateID!, this.customerToUpdate.customer_status!, this.customerToUpdate.client_id!).
      subscribe((result: Customers[]) => {
        this.allCustomers2 = result;
      })
    }
  }

  editCustomer(newCustomer: Customers){
    this.customerToUpdate = newCustomer;
    this.customerService.setCustomer(this.customerToUpdate);
  }

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  onTableDataChange(event: any){
    this.page = event;
    var client_id = Number(localStorage.getItem("client_id"));
    this.customerService.getCustomersDisplay(client_id).subscribe((result: Customers[])=>(this.allCustomers = result));
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
    this.allCustomers.forEach((cu) => cu.selected = this.selectAll);
  }

  isAllCheckBoxesSelected(){
    return this.allCustomers.every((cu) => cu.selected);
  }

  listOfIds: string = "";

  markActive(){
    this.allCustomers.forEach((cu) => {
      if(cu.selected){
        this.listOfIds = this.listOfIds + "," + cu.customer_id;
      }
      console.log(this.listOfIds);
    });
    var clientId = Number(localStorage.getItem("client_id"));
    this.customerService.updateCustomerStatus(this.listOfIds, 'Y', clientId).subscribe((result: Customers[]) => {
      this.allCustomers2 = result;
      window.location.reload();
    });
  }
  
  markInActive(){
    this.allCustomers.forEach((cu) => {
      if(cu.selected){
        this.listOfIds = this.listOfIds + "," + cu.customer_id;
      }
    });
    var clientId = Number(localStorage.getItem("client_id"));
    this.customerService.updateCustomerStatus(this.listOfIds, 'N', clientId).subscribe((result: Customers[]) => {
      this.allCustomers2 = result;
      window.location.reload();
    });
  }

}
