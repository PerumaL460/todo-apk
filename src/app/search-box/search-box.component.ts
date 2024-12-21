import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, Observer, debounceTime, distinct, distinctUntilChanged, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule , HttpClientModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent implements OnInit {

  results!: Observable<any>;
  searchSubject : any;
  
  constructor(private http : HttpClient){

  }
  ngOnInit(): void {
    this.asyncStream()
  }

  asyncStream(){
    let observable = new Observable ((observer : any)=>{ 
      setInterval(() =>{
        let random = Math.random();
        let roundedNo = Math.round(random * 100)/1;
        observer.next(roundedNo);
      },1000)
    })
    observable.subscribe((res:any)=> this.Listener(res))
  }

  Listener(res : any){
    console.log(res);
    this.searchSubject = res;
  }
  

}


