import { Component, OnInit } from '@angular/core';
import { Expenditures } from 'src/app/models/Expenditures';
import {ExpendituresService} from 'src/app/services/expenditures.service'

@Component({
  selector: 'app-view-expenditures',
  templateUrl: './view-expenditures.component.html',
  styleUrl: './view-expenditures.component.scss'
})
export class ViewExpendituresComponent implements OnInit{

  constructor(private expService: ExpendituresService){}

  allExp: Expenditures[] = [];

  ngOnInit(): void {
    var client_id = Number(localStorage.getItem("client_id"));
    this.expService.getAllExpendituresDisplay(client_id).subscribe((result: Expenditures[])=>(this.allExp = result));
  }

  allExpenditures2: Expenditures[] = [];
  expenditureToUpdate: Expenditures = new Expenditures();
  expenditureUpdateID?: string;

  editExpenditure(newExp: Expenditures){
    this.expenditureToUpdate = newExp;
    this.expService.setExpenditure(this.expenditureToUpdate);
  }

  updateExpenditureStatus(newExp: Expenditures, state: boolean, status: string){
    if(state){
      this.expenditureToUpdate = newExp;
      this.expService.setExpenditure(this.expenditureToUpdate);

      this.expenditureUpdateID = this.expenditureToUpdate.expenditure_id?.toString();

      if(this.expenditureToUpdate.expenditure_status == 'Y'){
        this.expenditureToUpdate.expenditure_status = 'N';
      }
      else{
        this.expenditureToUpdate.expenditure_status = 'Y';
      }

      this.expService.updateExpenditureStatus(this.expenditureUpdateID!, this.expenditureToUpdate.expenditure_status!, this.expenditureToUpdate.client_id!).
      subscribe((result: Expenditures[]) => {
        this.allExpenditures2 = result;
      })
    }
    else{
      this.expenditureToUpdate = newExp;
      this.expService.setExpenditure(this.expenditureToUpdate);

      this.expenditureUpdateID = this.expenditureToUpdate.expenditure_id?.toString();

      this.expenditureToUpdate.expenditure_status = status;

      this.expService.updateExpenditureStatus(this.expenditureUpdateID!, this.expenditureToUpdate.expenditure_status!, this.expenditureToUpdate.client_id!).
      subscribe((result: Expenditures[]) => {
        this.allExpenditures2 = result;
      })
    }
  }

  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  onTableDataChange(event: any){
    this.page = event;
    var client_id = Number(localStorage.getItem("client_id"));
    this.expService.getAllExpendituresDisplay(client_id).subscribe((result: Expenditures[])=>(this.allExp = result));
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
    this.allExp.forEach((ex) => ex.selected = this.selectAll);
  }

  isAllCheckBoxesSelected(){
    return this.allExp.every((ex) => ex.selected);
  }

  listOfIds: string = "";

  markActive(){
    this.allExp.forEach((ex) => {
      if(ex.selected){
        this.listOfIds = this.listOfIds + "," + ex.expenditure_id;
      }
      console.log(this.listOfIds);
    });
    var clientId = Number(localStorage.getItem("client_id"));
    this.expService.updateExpenditureStatus(this.listOfIds, 'Y', clientId).subscribe((result: Expenditures[]) => {
      this.allExpenditures2 = result;
      window.location.reload();
    });
  }
  
  markInActive(){
    this.allExp.forEach((ex) => {
      if(ex.selected){
        this.listOfIds = this.listOfIds + "," + ex.expenditure_id;
      }
    });
    var clientId = Number(localStorage.getItem("client_id"));
    this.expService.updateExpenditureStatus(this.listOfIds, 'N', clientId).subscribe((result: Expenditures[]) => {
      this.allExpenditures2 = result;
      window.location.reload();
    });
  }

}
