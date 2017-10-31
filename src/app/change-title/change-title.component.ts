import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service'

@Component({
  selector: 'change-title',
  templateUrl: './change-title.component.html',
  styles: []
})
export class ChangeTitleComponent implements OnInit {
  title:string
  constructor(private titleService:TitleService) { }

  ngOnInit() {
    setInterval(()=>{
      this.title = this.titleService.title 
    }, 2000)
  }
  changeTitle(e){
    const newTitle = e.target.value
    this.titleService.title = newTitle
  }
}
