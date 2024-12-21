import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productDetails: any;
  productId : any;
  constructor(private activatedRoute : ActivatedRoute){
      this.productId = this.activatedRoute.snapshot.paramMap.get('id');
      console.log(this.productId);
      let details = localStorage.getItem('todos');
      if(details){
          this.productDetails = JSON.parse(details);
          this.productDetails = this.productDetails.find((el:any) => el.id == this.productId);
          console.log(this.productDetails);
      }
  }
}
