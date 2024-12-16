import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  userDetails:any;
  totalPrice: any;
  constructor() {
      this.loadDatas()
  }
  loadDatas(){
    let userData = localStorage.getItem('service_history')
    if(userData){ 
          this.userDetails = JSON.parse(userData);
          let userPrices = this.userDetails.map((el : any) => el.price);
          console.log(userPrices);
            this.totalPrice = userPrices.reduce((current: any , prev: any)=> current + prev ,0);
           console.log(this.totalPrice);
    }
  }
}
