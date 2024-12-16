import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule ,FormsModule ,ReactiveFormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  userDetails : any;
  user_history : {user_name : string , price : number}[] =[];
  serviceForm! : FormGroup
  constructor(private fb : FormBuilder , private router : Router, private service : SharedService){
    this.serviceForm = this.fb.group({
      user_name :[''],
      price :['']
     })
    this.loadDatas();
    this.service.getDetails().subscribe((res:any)=>{
      console.log(res);
    })
  }
  loadDatas(){
   let data = localStorage.getItem('todos');
   let servicedData = localStorage.getItem('service_history');
   if(servicedData){ this.user_history = JSON.parse(servicedData) }
   if(data){
      this.userDetails =  JSON.parse(data);
      console.log(this.userDetails);
      this.serviceForm.patchValue({
        "user_name" : this.userDetails[0].name,
        "price" : 0
      })
   }
  }
  changeValue(event : any){
    console.log(event.target.value);
    
  }
  addData(form:any){
    alert("form submmitted successfully");
    this.user_history.push(form);
    this.saveUser_history()
    this.router.navigateByUrl('/user-details');
    // this.serviceForm.reset();
  }
  saveUser_history(){
    localStorage.setItem('service_history' , JSON.stringify(this.user_history));
  }
}
