import { Component, OnInit, OnDestroy, Injectable, ElementRef } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Headers, Http } from '@angular/http';
import { DsService } from '../dsService.service';

export class fibonacciSeries{
  number:string;
}
const FIBONACI: fibonacciSeries[]=[];

export class storePoker{
  id:string;
  name: string;
  points: string;
}

const STOREPOKERS: storePoker[] =[];
@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})


export class PokerComponent implements OnInit {
  fibonacci = FIBONACI;
  storepokeri = STOREPOKERS;
  fibonaciCount = 11;
  readFibonaci;
  choose;
  open:boolean = false;
  size:boolean = true;
  disabled:boolean = true;
  card1:boolean = false;
  card2:boolean = true;
  pdisabled:boolean = false;
  uniqueId;
  records;
  findCurrentPath;
  list;
  constructor(private router:Router, private dsService: DsService, private eleRef:ElementRef, private location:Location, private route:ActivatedRoute) { 
    this.records = this.dsService.dsInstance;
       this.uniqueId = this.records.getUid();
  }
  
  ngOnInit() {
   
    this.calFibNum(this.fibonaciCount);
    this.findCurrentPath = location.pathname.split('/').pop();
    
    this.list = this.records.record.getRecord('retroTemplate/'+this.findCurrentPath+'temp');
    this.list.subscribe((data) => {
       this.storepokeri= data;
     })   


  }
  
  include(selNum):void{
      this.size = false;
      this.open = true;
      this.choose = selNum;
      
      setTimeout(() => {
          this.open = false;
      },1000)

      this.disabled = false;
  }
    
reveal(id:string, name:string, point:string){
  this.card1 = true;
  this.card2 = false;
  //this.list.set(this.storepokeri);
 // console.log(this.storepokeri);
 console.log(id, name, point);
 var newItem ={
            id: id,
            name:name,
            points:point
        }
       let updateItem = this.storepokeri.find(this.findIndexToUpdate, newItem.id);
        let index = this.storepokeri.indexOf(updateItem);
        this.storepokeri[index] = newItem;
        this.list.set(this.storepokeri);
}
 findIndexToUpdate(newItem) { 
        return newItem.id === this;
  }
close(){
  this.card1 = false;
  this.card2 = true;
}
   calFibNum(num){
     var firstNum=1, secNum=0, temp;
     while (num >= 0){
       temp = firstNum;
       firstNum = firstNum+secNum;
       secNum = temp;
       this.readFibonaci = secNum;
       num--;
       this.fibonacci.push(this.readFibonaci);
     }
     return secNum;
    
   }
   addPoker(){
     // var id = this.records.getUid();
     // console.log(id);
      var createNewPCard = {
            id: this.uniqueId,
            name:"Name",
            points:this.choose
      }
     this.storepokeri.push(createNewPCard);
     console.log(this.storepokeri);
     this.pdisabled = true;
   }

   delete(id):void{
      var index = this.storepokeri.indexOf(id);
      if(index !==1 ){
        this.storepokeri.splice(index,1);
        this.pdisabled = false;
      }
     // this.list.set(this.storepokeri);
  }
}


