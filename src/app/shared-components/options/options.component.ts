import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})
export class OptionsComponent {   

  @Output() userName = new EventEmitter<any>();
  @Output() changeFilter = new EventEmitter<any>();
  name ="perumal" 
  constructor(){
    console.log(this.name);
    
  }
   statusFilter(event : any){
    this.changeFilter.emit(event.target.value);
   }
   sendData(event : any){
    this.userName.emit("data recieves from child");
   }
}
