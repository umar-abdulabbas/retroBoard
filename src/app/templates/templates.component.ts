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
      var id = this.records.getUid();
      var createNewCard = {
            id: id,
            content:"Enter your comment",
            pos_top:"",
            pos_left:""
      }
      this.cards.push(createNewCard);
      this.list.set(this.cards);
  }

  save(textarea,id):void{
        console.log(textarea, id);
        var x = document.getElementById(id);
        let left  = getComputedStyle(x, null).getPropertyValue('left');
        let top  = getComputedStyle(x, null).getPropertyValue('top');
        console.log(left, top);
        var newItem ={
            id: id,
            content:textarea,
            pos_top:left,
            pos_left:top
        }
       let updateItem = this.cards.find(this.findIndexToUpdate, newItem.id);
        let index = this.cards.indexOf(updateItem);
        this.cards[index] = newItem;
        this.list.set(this.cards);
        console.log("newItem",newItem);
         console.log("Save",this.cards);
  }

   findIndexToUpdate(newItem) { 
        return newItem.id === this;
  }
  delete(id):void{
      var index = this.cards.indexOf(id);
      if(index !==1 ){
        this.cards.splice(index,1);
      }
      this.list.set(this.cards);
  }
  navCollapse(valux){
     
    //  var x = document.getElementById(valux);
    //  let left  = getComputedStyle(x, null).getPropertyValue('left');
    //  let top  = getComputedStyle(x, null).getPropertyValue('top');
    //   var createNewCards = {
    //         id: valux,
    //         content:"Enter your comment",
    //         pos_top:top,
    //         pos_left:left
    //   }
    //   this.cards.push(createNewCards);
    //   this.list.set(this.cards);
  }
  
}
