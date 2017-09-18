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
   // { id:"1", content:"Hello, I'm first card", pos_top:"10px", pos_left:"100px" }
   
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
  isActive:boolean = false ;
  mobHeight: any;
  mobWidth: any;
  isSpecial = true;
  constructor(private router:Router, private dsService: DsService, private eleRef:ElementRef, private location:Location, private route:ActivatedRoute) {
       this.records =  this.dsService.dsInstance;
       this.uniqueId = this.records.getUid();
   }
  
  ngOnInit() {
    this.findCurrentPath = location.pathname.split('/').pop();
    this.list = this.records.record.getRecord('retroTemplate/'+this.findCurrentPath+'temp');
    this.list.subscribe((data) => {
       this.cards= data;
     })
   
this.mobHeight = (window.screen.height) + "px";
this.mobWidth = (window.screen.width) + "px";

console.log(this.mobWidth)
  }

   ngOnDestroy() {
   
  }

  
  addCard():void{
      var id = this.records.getUid();
      var createNewCard = {
            id: id,
            content:"",
            pos_top:Math.floor(Math.random() * 100) + "px",
            pos_left:Math.floor(Math.random() * 100) + "px"
      }
     
      this.cards.push(createNewCard);
      this.list.set(this.cards);
  }

  save(textarea,id):void{
      
    
        var x = document.getElementById(id);
        let left  = getComputedStyle(x, null).getPropertyValue('left');
        let top  = getComputedStyle(x, null).getPropertyValue('top');
        console.log(left, top);
        var newItem ={
            id: id,
            content:textarea,
            pos_top:top,
            pos_left:left
        }
        let updateItem = this.cards.find(this.findIndexToUpdate, newItem.id);
        let index = this.cards.indexOf(updateItem);
        this.cards[index] = newItem;
        this.list.set(this.cards);
        this.isActive = true;

  }

   findIndexToUpdate(newItem) { 
        return newItem.id === this;
  }
  delete(id:string):void{
      this.cards = this.cards.filter( item => item.id !== id);
      this.list.set(this.cards);
  }
  textArea(value){
      this.isActive = value;
      this.isActive = true;
  }
 
  
}
