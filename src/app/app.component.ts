import { Component } from '@angular/core';
import { TitleService } from './title.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string;

  constructor(private titleService:TitleService){}

  ngOnInit(){
      this.titleService.title.subscribe((value:string)=>{
        this.title = value
      }) 
  }
}
