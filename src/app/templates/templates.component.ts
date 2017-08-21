import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
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
 
  selectTemplate = [];
  idx = new Date;
  id = this.idx.getDay() + this.idx.getDate() + this.idx.getTime();
   username= this.id;
  master = this.idx.getDay() + this.idx.getDate() + this.idx.getTime();
  constructor(private router:Router, private dsService: DsService) { }
  
  ngOnInit() {
    let readRouterId = this.router.url.split('/').pop();
    console.log(readRouterId);
    let result;
    this.currenttemplate = this.dsService.dsInstance.record.getRecord('retro/'+readRouterId)
    
    this.currenttemplate.subscribe(
      (data) => {  
       
        this.selectTemplate.push({'id': data.id, 'name':data.name, 'message':data.message, 'template':data.template})
        
      }
    );
   //result = this.currenttemplate.length;
   console.log(result);
  }

   ngOnDestroy() {
    this.currenttemplate.unsubscribe();
  }

  addBox(){
  
  this.selectTemplate.push('','');
   //this.currenttemplate.set(entry);
  }
}
