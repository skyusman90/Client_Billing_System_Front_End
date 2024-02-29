import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Expenditures } from 'src/app/models/Expenditures';
import { ExpendituresService } from 'src/app/services/expenditures.service';

@Component({
  selector: 'app-add-expenditures',
  templateUrl: './add-expenditures.component.html',
  styleUrl: './add-expenditures.component.scss'
})
export class AddExpendituresComponent {
  title='add-expenditure';

  constructor(private expService: ExpendituresService, private router: Router, private toastr: ToastrService){}

  newExpenditure: Expenditures = new Expenditures();
  allExpenditures: Expenditures[] = [];

  addExpenditure(){
    this.expService.AddExpenditure(this.newExpenditure).subscribe((result: Expenditures[])=>(this.allExpenditures = result));
    this.toastr.success("Expenditure successfully added");
    this.router.navigateByUrl("/expenditures");
  }
}
