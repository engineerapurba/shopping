import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient , HttpResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';




function passwordsMatchValidator(form) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}


function symbolValidator(control) { 
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;

  if(control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder , private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordsMatchValidator
    })
  }

  register() {
    console.log(this.registerForm.value)
     var user = {name : this.registerForm.value.name ,
                 Email :this.registerForm.value.email ,
                username :this.registerForm.value.username ,
                password :this.registerForm.value.username ,
    
    }
    console.log(user)
    var x=this.create(user)
    console.log(x)
    if(x!=null) {
      alert("registration is successful");
      this.router.navigateByUrl('/login');

    }
    
  }

  create(user:any): Observable<any> {
    var apiServer = "http://localhost:4200/register"
   return this.http.post<any>(apiServer,user).pipe(
     catchError(this.error)
   )
  }
  error(): any {
    return 1;
  }

}
