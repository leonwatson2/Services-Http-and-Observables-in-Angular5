import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'
import 'rxjs/Rx'

@Injectable()
export class TitleService {
  title:Observable<string>;
  titleObserver:Observer<string>
  constructor() {
    this.title = Observable.create( (obs:Observer<string>)=>{
      this.titleObserver = obs
      this.titleObserver.next("Service")
    }).share()
      
  }

}
