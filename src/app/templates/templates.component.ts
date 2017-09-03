import { Component, OnInit, OnDestroy, Injectable, ElementRef } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Headers, Http } from '@angular/http';
import { DsService } from '../dsService.service';

export class templates{
    id:string;
    content:string;
    pos_top:string;
    pos_left:string;
}

const TEMPLATES: templates[] = [
    { id:"1", content:"Hello, I'm first card", pos_top:"10px", pos_left:"100px" }
   
];

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit, OnDestroy {
  top:string;
  left:string;
  cards = TEMPLATES;
  uniqueId;
  records;
  findCurrentPath;
  list;
  createData;
  constructor(private router:Router, private dsService: DsService, private eleRef:ElementRef, private location:Location, private route:ActivatedRoute) {
       this.records = this.dsService.dsInstance;
       this.uniqueId = this.records.getUid();
   }
  
  ngOnInit() {
    this.findCurrentPath = location.pathname.split('/').pop();
    this.list = this.records.record.getRecord('retroTemplate/'+this.findCurrentPath+'temp');
    this.list.subscribe((data) => {
       this.cards= data;
     })
     
  }

   ngOnDestroy() {
   
  }

  
  addCard():void{
      var x = this.records.getUid();
      var createNewCard = {
            id: x,
            content:"Enter your comment",
            pos_top:"",
            pos_left:""
      }
      this.cards.push(createNewCard);
      this.list.set(this.cards);
  }
  navCollapse(valux){
     
     var x = document.getElementById(valux);
     let left  = getComputedStyle(x, null).getPropertyValue('left');
     let top  = getComputedStyle(x, null).getPropertyValue('top');
      var createNewCards = {
            id: valux,
            content:"Enter your comment",
            pos_top:top,
            pos_left:left
      }
      this.cards.push(createNewCards);
      this.list.set(this.cards);
  }
  
}
