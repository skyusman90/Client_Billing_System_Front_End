import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Clients } from 'src/app/models/Clients';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private clientService: ClientService, private toast: ToastrService, private router: Router){}

  newClient: Clients = new Clients();
  clients: Clients[] = [];

  Register(){
    this.clientService.insertClient(this.newClient).subscribe((response: Clients[])=>(this.clients = response));
    this.toast.success("You have successfully created a new account");
    this.router.navigateByUrl('login');
  }

}
