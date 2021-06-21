import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.model)
    if(this.model.username=="buyer" && this.model.password =="@123abc"){
      this.router.navigateByUrl('/shop');
}
else {
  alert("Incorrect username or password")
}
  }

}
