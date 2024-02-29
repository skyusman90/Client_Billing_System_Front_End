import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Clients } from 'src/app/models/Clients';
import { ClientService } from 'src/app/services/client.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/models/Login';
import { Observable, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  title="Login Page";

  constructor(private http: HttpClient, private clientService: ClientService, private router: Router, private toastr: ToastrService){}

  newLogin: Login = new Login();
  newLogin2: Login = new Login();
  token: string = "";
  buttonPressed: boolean = false;
  status: boolean = false;

  Login(){
    this.clientService.logClient(this.newLogin).subscribe((response: string)=>{
      if(response != "Incorrect Username or Password"){
        localStorage.setItem("authToken", response);
        this.toastr.success("Logged in successfully");
        this.setClientToLogin(this.newLogin);
        this.router.navigateByUrl("/dashboard");
      }
      else{
        this.toastr.error("Invalid Username or Password");
      }
    });
    this.buttonPressed = true;
  }

  setClientToLogin(newLogin: Login){
    this.clientService.getClientByUsername(newLogin).subscribe((response: Clients[])=>{
      this.newLogin2.username = response[0].client_username;
      this.newLogin2.password = response[0].client_password;
      this.newLogin2.result = true;
      this.newLogin2.message = "Logged In";
      localStorage.setItem("client_id", response[0].client_id.toString());
      this.clientService.setClient(this.newLogin2);
    })
  }

  loading$: Observable<boolean> = of(false);

  ngOnInit(): void {
    this.loading$ = this.router.events.pipe(
      filter(
        (e)=>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError
      ),
      map((e) => e instanceof NavigationStart)
    );
  }

}
