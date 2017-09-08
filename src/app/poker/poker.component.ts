import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {
  fibonacci;
  constructor() { }

  ngOnInit() {
    this.fibonacci = 0;
    
  }


}
