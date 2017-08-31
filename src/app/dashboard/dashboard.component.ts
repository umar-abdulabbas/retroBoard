import { Component, OnInit, Injectable, Input, Directive, ElementRef} from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';


import { DsService } from '../dsService.service';



export class templates{
    id:string;
    content:string;
    pos_top:string;
    pos_left:string;
}
const TEMPLATES: templates[] = [
    { id:"1", content:"Hello, I'm first card", pos_top:"100px", pos_left:"100px" },
    { id:"1", content:"Hello, I'm first card", pos_top:"100px", pos_left:"100px" },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //New Identification 
  cards = TEMPLATES;

  //color = 'yellow';
  uniqueId;
  records;
  lists;
  templates;
  px;
  constructor(private router:Router, private dsService: DsService, private el:ElementRef) { }

  ngOnInit() {
     // this.uniqueId = this.dsService.dsInstance.getUid();
      console.log(this.uniqueId);
      this.records = this.dsService.dsInstance.record;
      this.lists = this.records.getRecord('check/j6sey9dg-1u9u19cvi8r')
      this.lists.subscribe((data) =>{
        console.log(data);
        this.templates= data;
      })
      
      
  }

  addCard():void{
      var createNewCard = {
            id:"2",
            content:"Enter your comment",
            pos_top:"100px",
            pos_left:"100px"
      }
      this.cards.push(createNewCard);    
  }


  add(content:string, comment:string){
   var sendData = {
      content:content,
      comment:comment,
     
   }
  
    console.log(this.templates);
    const card = this.records.getRecord('check/j6sey9dg-1u9u19cvi8r');
    card.whenReady((record) => {
      console.log(record);
      card.set(this.templates);
      
    })
  }

  fx(valuex){
    console.log(valuex)
    var x = document.getElementById(valuex);
    //var makeData ={};
     // valuex.push(makeData);
    //console.log(valuex);
    //console.log(valuex.clientY - this.el.nativeElement.style.top.replace('px',''))
   // console.log( this.el.nativeElement.style.top.get('px',''));
    let styles =getComputedStyle(x, null).getPropertyValue('left');
    console.log(styles);
  } 
  
   
}
