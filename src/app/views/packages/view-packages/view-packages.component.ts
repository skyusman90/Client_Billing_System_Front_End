import { Component, OnInit } from '@angular/core';
import { Packages } from 'src/app/models/Packages';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-view-packages',
  templateUrl: './view-packages.component.html',
  styleUrl: './view-packages.component.scss'
})
export class ViewPackagesComponent implements OnInit{

  constructor(private packageService: PackagesService){}

  allPackages: Packages[] = [];

  ngOnInit(): void {
    var client_id = Number(localStorage.getItem("client_id"));
    this.packageService.getAllPackagesDisplay(client_id).subscribe((result: Packages[])=>(this.allPackages = result));
  }

  allPackages2: Packages[] = [];
  packageToUpdate: Packages = new Packages();
  packageUpdateID?: string;

  updatePackageStatus(newPackage: Packages, state: boolean, status: string){
    if(state){
      this.packageToUpdate = newPackage;
      this.packageService.setPackage(this.packageToUpdate);
  
      this.packageUpdateID = this.packageToUpdate.package_id?.toString();
  
      if(this.packageToUpdate.package_status == 'Y'){
        this.packageToUpdate.package_status = 'N';
      }
      else{
        this.packageToUpdate.package_status = 'Y';
      }
  
      this.packageService.updatePackageStatus(this.packageUpdateID!, this.packageToUpdate.package_status!, this.packageToUpdate.client_id!).
      subscribe((result: Packages[]) => {
        this.allPackages2 = result;
      })
    }
    else{
      this.packageToUpdate = newPackage;
      this.packageService.setPackage(this.packageToUpdate);

      this.packageUpdateID = this.packageToUpdate.package_id?.toString();

      this.packageToUpdate.package_status = status;

      this.packageService.updatePackageStatus(this.packageUpdateID!, this.packageToUpdate.package_status!, this.packageToUpdate.client_id!).
      subscribe((result: Packages[]) => {
        this.allPackages2 = result;
      })
    }
  }

  editPackage(newPackage: Packages){
    this.packageToUpdate = newPackage;
    this.packageService.setPackage(this.packageToUpdate);
  }

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  onTableDataChange(event: any){
    this.page = event;
    var client_id = Number(localStorage.getItem("client_id"));
    this.packageService.getAllPackagesDisplay(client_id).subscribe((result: Packages[])=>(this.allPackages = result));
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
    this.allPackages.forEach((pa) => pa.selected = this.selectAll);
  }

  isAllCheckBoxesSelected(){
    return this.allPackages.every((pa) => pa.selected);
  }

  listOfIds: string = "";

  markActive(){
    this.allPackages.forEach((pa) => {
      if(pa.selected){
        this.listOfIds = this.listOfIds + "," + pa.package_id;
      }
      console.log(this.listOfIds);
    });
    var clientId = Number(localStorage.getItem("client_id"));
    this.packageService.updatePackageStatus(this.listOfIds, 'Y', clientId).subscribe((result: Packages[]) => {
      this.allPackages2 = result;
      window.location.reload();
    });
  }
  
  markInActive(){
    this.allPackages.forEach((pa) => {
      if(pa.selected){
        this.listOfIds = this.listOfIds + "," + pa.package_id;
      }
    });
    var clientId = Number(localStorage.getItem("client_id"));
    this.packageService.updatePackageStatus(this.listOfIds, 'N', clientId).subscribe((result: Packages[]) => {
      this.allPackages2 = result;
      window.location.reload();
    });
  }

}
