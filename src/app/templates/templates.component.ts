import { Component, OnInit, OnDestroy, Injectable, ElementRef } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { DsService } from '../dsService.service';

export class templates{
    id:string;
    name:string;
    message:string;
    template:string;
}
const TEMPLATES: templates[] = [
  
];


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit, OnDestroy {
  currenttemplate;
   firstname;
  selectTemplate = [];
  myInfo = this.selectTemplate[0];
  idx = new Date;
  item = this.idx.getMilliseconds();
  
   //username= this.id;
  master = this.idx.getDay() + this.idx.getDate() + this.idx.getTime();
  constructor(private router:Router, private dsService: DsService, private eleRef:ElementRef) { }
  
  ngOnInit() {
    let readRouterId = this.router.url.split('/').pop();
    console.log(readRouterId);
    let result;
    this.currenttemplate = this.dsService.dsInstance.record.getRecord('retro/'+readRouterId)
    
    this.currenttemplate.subscribe(
      (data) => {  
       
       // this.selectTemplate.push({'id': data.id, 'name':data.name, 'message':data.message, 'template':data.template})
        
      }
    );
   //result = this.currenttemplate.length;
   
  }

   ngOnDestroy() {
    //this.currenttemplate.unsubscribe();
  }

  addBox(){ 
    
    
    
  if(this.selectTemplate.indexOf(this.item) == -1){
    this.selectTemplate.push(this.item);
    this.item++;
  }
  
   //this.currenttemplate.set(entry);
   console.log(this.selectTemplate);
  }

  handleFChange(val){
    this.currenttemplate.set('firstname',val);
  }
}
