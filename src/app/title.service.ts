import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class TitleService {
  title:string = "Service"
  constructor() {
    const number = Observable.interval(1000)    
    number.subscribe((number)=>{
      this.title = `${number}`
    })
  }

}
