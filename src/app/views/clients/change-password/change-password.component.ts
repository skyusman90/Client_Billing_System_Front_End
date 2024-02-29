import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clients } from 'src/app/models/Clients';
import { ClientService } from 'src/app/services/client.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit{

  title='change password page';

  constructor(private clientService: ClientService, private toastr: ToastrService){}

  newClient: Clients[] = [];
  newLogin: Login = new Login();
  allClients: Clients[] = [];

  ChangePassword = new FormGroup({
    old_password: new FormControl(""),
    new_password: new FormControl("")
  })

  ngOnInit(): void{
    this.newLogin = this.clientService.getLoginClient();
    console.log(this.newLogin);
    this.clientService.getClientByUsername(this.newLogin).subscribe((result: Clients[])=>(this.newClient = result));
  }

  changePassword(){
    this.clientService.updateClientPassword(this.newClient[0].client_id!, this.newClient[0].client_username!, this.ChangePassword.value.new_password!, this.ChangePassword.value.old_password!).
    subscribe((result: Clients[])=>{
      this.allClients = result;
      if(this.ChangePassword.value.new_password == this.allClients[0].client_password){
        this.toastr.success("Password has been successfully changed");
      }
      else{
        this.toastr.error("Password cannot be changed");
      }
    })
  }

}
