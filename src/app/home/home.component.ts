import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hello-Angular';
  myColor: string = 'orange';
  
  constructor() { }

  changeColor(): void {
    this.myColor = 'red';
  }


  ngOnInit() {
  }

}
