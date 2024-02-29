import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Packages } from 'src/app/models/Packages';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-add-packages',
  templateUrl: './add-packages.component.html',
  styleUrl: './add-packages.component.scss'
})
export class AddPackagesComponent {
  title="add-package";

  constructor(private packageService: PackagesService, private router: Router, private toastr: ToastrService){}

  newPackage: Packages = new Packages();
  allPackages: Packages[] = [];

  addPackage(){
    this.packageService.AddPackage(this.newPackage).subscribe((result: Packages[])=>(this.allPackages = result));
    this.toastr.success("Package successfully added");
    this.router.navigateByUrl("/packages");
  }
}
