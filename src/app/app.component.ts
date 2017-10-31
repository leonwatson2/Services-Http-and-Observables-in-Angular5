import { Component } from '@angular/core';
import { TitleService } from './title.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TitleService ]
})
export class AppComponent {
  title:string;

  constructor(private titleService:TitleService){}

  ngOnInit(){
    this.title = this.titleService.title  
  }
}
