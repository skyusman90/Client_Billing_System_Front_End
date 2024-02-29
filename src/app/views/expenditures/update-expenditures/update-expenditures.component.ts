import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Expenditures } from 'src/app/models/Expenditures';
import { ExpendituresService } from 'src/app/services/expenditures.service';

@Component({
  selector: 'app-update-expenditures',
  templateUrl: './update-expenditures.component.html',
  styleUrl: './update-expenditures.component.scss'
})
export class UpdateExpendituresComponent {
  title='update-expenditure';

  constructor(private expService: ExpendituresService, private toastr: ToastrService, private router: Router){}

  newExpenditure = this.expService.getExpenditure();
  allExpenditures: Expenditures[] = [];

  updateExpenditure(){
    return this.expService.updateExpenditure(this.newExpenditure).subscribe((
      result: Expenditures[]
    ) => {
      this.allExpenditures = result;
      if(this.allExpenditures.length == 0){
        this.toastr.error("No Expenditure exists.");
      }
      else{
        this.toastr.success("Expenditure has been updated");
      }
      this.router.navigateByUrl("/expenditures");
    })
  }

}
