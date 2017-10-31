import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  title:string = "Service"
  constructor() { 
    setTimeout(()=>{
      this.title = "New Service"
    }, 3000)
  }

}
