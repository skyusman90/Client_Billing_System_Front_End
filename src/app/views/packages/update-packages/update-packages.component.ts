import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Packages } from 'src/app/models/Packages';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-update-packages',
  templateUrl: './update-packages.component.html',
  styleUrl: './update-packages.component.scss'
})
export class UpdatePackagesComponent {
  title="update-package";

  constructor(private packageService: PackagesService, private toastr: ToastrService, private router: Router){}

  newPackage = this.packageService.getPackage();
  allPackages: Packages[] = [];

  updatePackage(){
    return this.packageService.updatePackage(this.newPackage).subscribe((
      result: Packages[]
    ) => {
      this.allPackages = result;
      if(this.allPackages.length == 0){
        this.toastr.error("No Package exists.");
      }
      else{
        this.toastr.success("Package has been updated");
      }
      this.router.navigateByUrl('/packages');
    })
  }
}
