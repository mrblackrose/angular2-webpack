import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private dateString: string;

  constructor() {
    // Do stuff
    this.dateString = '02/01/2017';
  }
  onDateChange(dateString): void {
    console.log(dateString);
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
