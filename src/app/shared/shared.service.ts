import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public shared_details = new BehaviorSubject<any>(null);

  constructor() { }

  setDetails(value : any){
    this.shared_details.next(value);
  }
  getDetails(){
    return this.shared_details.asObservable();
  }
}
