  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';
import { OptionsComponent } from "../shared-components/options/options.component";
import { AppendPipe } from '../../data.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, AppendPipe, FormsModule, ReactiveFormsModule, HttpClientModule, OptionsComponent],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss'
})
export class CreateTodoComponent {
 todoForm! : FormGroup;
 apiUrl = "http://localhost:3000/users"
  users: {name : string ; todo_name : string , id : number , todo_status : string }  [] =[];
  userId: number | any;
  isEditable : boolean = false
  filteredUsers:any;
  todo_status: any;
 constructor(private fb : FormBuilder , private router : Router, private service : SharedService  ) {
   this.todoForm = this.fb.group(({
      name : ['' , Validators.required],
      todo_name:['null'],
      id:[''],
      todo_status:['']
   }));
   this.loadTodos();
   this.filteredUsers = this.users;
   this.statusFilter("true")
 }
 getControls(name : string){
  return this.todoForm.get(name);
 }
 loadTodos(){
  let users = localStorage.getItem('todos');{
      if(users){
        this.users = JSON.parse(users);
        this.users = [... new Set (this.users)]
        let filteredUsers = this.users.filter((el: any) => el.todo_status === "false");
        // console.log(filteredUsers);
        }
  }
 }
 navigateProductPage(id : any){
  this.router.navigate(['/product-details' , id]);
 }
 statusFilter(event : any){
  this.todo_status = event;
  this.todoForm.patchValue({
    todo_status : event,
  })
  console.log(event);
   let val =event;
   if(!val){
    val = "true";
   }
    if(val!== "all"){
      this.filteredUsers = this.users.filter((el: any) => el.todo_status === val);
    }
    else if(val =="all"){
      this.filteredUsers = this.users;
    }
 }
 formSubmit(form:any){
  if(this.users.length>=1){
    let d = this.users.slice(-1);
    this.userId = d[0].id;
    this.userId++ 
  }
    else{
     this.userId = 1;
    //  console.log(this.userId);
    }
    form.patchValue({
    id : this.userId,
    todo_status : this.todo_status
  })
  if(form.valid){
      this.users.push(form.value);
  }
  console.log(this.users);
  this.service.setDetails(this.users);
  this.saveTodos();
  this.todoForm.reset();
 }
 saveTodos(){
   localStorage.setItem('todos' , JSON.stringify(this.users));
 }
 deleteTodo(items : any , event : any){
  console.log(event,"check");
  
  if(confirm ("are you sure you want to delete this data ?")){
      // event.target.innerText = "deleting........"
      this.filteredUsers = this.filteredUsers.filter((el:any) => el.id !==items);
      // console.log(this.users);
      this.saveTodos();
  }
  else{
     return ;
  }
 }

 saveTodo(event : any , id : any){
  this.isEditable = false;
  this.saveTodos();
 }
 onEdit(event : any , id : any){
  if(confirm("if u wanted to edit todos")){
    this.isEditable = true;   
    this.users = this.users.map((el : any)=>{
      if(el.id == id){
        el.todo_name = event.target?.innerText; // Update the todo_name
      }
      return el ;
    })
    this.saveTodos();
    // console.log(todo_status);
    
  }
  else{ return}
 }


}
