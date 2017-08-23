import { Component, OnInit, OnDestroy, Injectable, ElementRef } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { DsService } from '../dsService.service';

export class templates{
    templatecreate:string;
   
}
const TEMPLATES: templates[] = [
     {"templatecreate": "Windstorm"}
];


@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit, OnDestroy {
  
  currenttemplate;
  store = '';
 
  constructor(private router:Router, private dsService: DsService, private eleRef:ElementRef) { }
  
  ngOnInit() {
    let readRouterId = this.router.url.split('/').pop();
    console.log(readRouterId);
    this.currenttemplate = this.dsService.dsInstance.record.getRecord('retro/'+readRouterId)
    this.currenttemplate.subscribe('posts',
      (data) =>{ 
        console.log(data);
       this.store = data;
       //console.log(mx);
      }
    )
    
    
    console.log(this.store);
  }

   ngOnDestroy() {
    //this.currenttemplate.unsubscribe();
  }
  addBox(){
    this.currenttemplate.set('profile',{"name": "typicodej"})

  }
  
}
