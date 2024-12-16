  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule , HttpClientModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss'
})
export class CreateTodoComponent {
 todoForm! : FormGroup;
 apiUrl = "http://localhost:3000/users"
  users: {name : string ; todo_name : string , id : number , todo_status : string } [] =[];
  userId: number | any;
  isEditable : boolean = false
 constructor(private fb : FormBuilder , private service : SharedService  ) {
   this.todoForm = this.fb.group(({
      name : ['' , Validators.required],
      todo_name:['null'],
      id:[''],
      todo_status:['false']
   }));
   this.loadTodos();
 }
 getControls(name : string){
  return this.todoForm.get(name);
 }
 loadTodos(){
  let users = localStorage.getItem('todos');{
      if(users){
        this.users = JSON.parse(users);
        }
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
     console.log(this.userId);
    }
    form.patchValue({
    id : this.userId
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
  if(confirm ("are you sure you want to delete this data ?")){
      event.target.innerText = "deleting........"
      this.users = this.users.filter((el:any) => el.id !==items);
      console.log(this.users);
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
