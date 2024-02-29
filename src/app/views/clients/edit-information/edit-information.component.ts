import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Clients } from 'src/app/models/Clients';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrl: './edit-information.component.scss'
})
export class EditInformationComponent implements OnInit{
  title="edit-information";

  constructor(private router: Router, private clientService: ClientService, private toastr: ToastrService){}

  newClient: Clients[] = [];
  client: Clients = new Clients();
  allClients: Clients[] = [];

  ngOnInit(): void{
    var clientId = Number(localStorage.getItem("client_id"));
    this.client.client_id = clientId;
    this.clientService.getClientById(this.client).subscribe((result: Clients[])=>{
      this.newClient = result;
      this.client = this.newClient[0];
    });
    console.log(this.client);
  }

  updateClient(){
    this.clientService.updateClients(this.client).subscribe((result: Clients[])=>{
      this.allClients = result;
      if(this.allClients.length == 0){
        this.toastr.error("Something went wrong");
      }
      else{
        this.toastr.success("Changes have been saved");
      }
    })
  }
}
