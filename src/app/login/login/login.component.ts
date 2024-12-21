import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm! : FormGroup;

  constructor(private fb : FormBuilder ,private router : Router){
    localStorage.removeItem('login_auth');
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password :['',Validators.required],
      auth:["dfghjklaw123456789olkmnb"]
    })
  }

   formSubmit(form:any){
     if(form){
      localStorage.getItem('login_form_details');
      localStorage.setItem('login_form_details', form.username);
      let auth = (form.auth);
      localStorage.getItem('login_auth')
      localStorage.setItem("login_auth", auth)
      alert("form Submitted successfully");
      this.router.navigateByUrl('/home')
     }
   }
   getFormControl(event : any){
    return this.loginForm.get(event);
   }

}
