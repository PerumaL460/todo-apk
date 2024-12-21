import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OptionsComponent } from "../shared-components/options/options.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, OptionsComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  userDetails:any;
  totalPrice: any;
  filteredData: any;
  userName: any;
  constructor() {
      this.loadDatas();
      this.statusFilter('true');
  }
  loadDatas(){
    this.userName = localStorage.getItem('login_form_details')
    let userData = localStorage.getItem('service_history')
    if(userData){ 
          this.userDetails = JSON.parse(userData);
          console.log(userData);
          let userPrices = this.userDetails.map((el : any) => el.price);
          console.log(userPrices);
            this.totalPrice = userPrices.reduce((current: any , prev: any)=> current + prev ,0);
           console.log(this.totalPrice);
    }
  }
  statusFilter(event : any){
    let val = event ;
    if(!val){val = "true"}
    if(val !=  "all"){
      this.filteredData = this.userDetails.filter((el:any)=> el.status === val);
      let filteredDataPrice = this.filteredData.map((el:any)=> el.price);
      this.totalPrice =filteredDataPrice.reduce((current:any , prev : any)=> current + prev,0)
      console.log(this.totalPrice);
    }
    else{
      this.filteredData = this.userDetails;   
      let filteredDataPrice = this.filteredData.map((el:any)=> el.price);
      this.totalPrice = filteredDataPrice.reduce((current :any , prev : any )=> current+prev);   
    };
  };
  getData(event:any){
    alert(event)
  }
}
