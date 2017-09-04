import { Component, OnInit, Injectable, Input, Directive, ElementRef} from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';


import { DsService } from '../dsService.service';

export class chooseTemplate{
    id:string;
    name:string;
}
const CTEMPLATES: chooseTemplate[]=[
      {id:"001", name:"Template1"}
  ]
  


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //New Identification 
  open:boolean = false;
  close:boolean = false;
  ctemplates = CTEMPLATES;


  uniqueId;
  records;
  lists;
  templates;
  px;
  constructor(private router:Router, private dsService: DsService, private el:ElementRef) { 
       this.records = this.dsService.dsInstance;
       this.uniqueId = this.records.getUid();
  }

  ngOnInit() {
     // this.uniqueId = this.dsService.dsInstance.getUid();
      // console.log(this.uniqueId);
      // this.records = this.dsService.dsInstance.record;
      // this.lists = this.records.getRecord('check/j6sey9dg-1u9u19cvi8r')
      // this.lists.subscribe((data) =>{
      //   console.log(data);
      //   this.templates= data;
      // })
      
      
  }
  create(boardname:string,desc:string, template:string):void{
    this.open = true;
    console.log(boardname, desc, template);
    var tempData = {
        id:this.uniqueId,
        BoardName:boardname,
        Description:desc,
        TemplateName:template 
    };
    console.log(tempData);
    const tempRecord = this.records.record.getRecord('retroTemplate/'+this.uniqueId);
    tempRecord.set(tempData);
    this.router.navigate(['/template/',this.uniqueId]);
  }

  

  
   
}
