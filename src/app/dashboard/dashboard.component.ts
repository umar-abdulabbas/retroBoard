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
  isActiveRetro:boolean = true;
 isActivePoker:boolean = false;
 active:boolean = false;
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

  createPoker(pokername:string):void{
    this.open = true;
    var pokerdata ={
      pokerName:pokername
    }
    const tempRecord = this.records.record.getRecord('retroTemplate/'+pokername);
     tempRecord.set(pokerdata);
     this.router.navigate(['/poker/',pokername]);
  }

  retroboard():void{
      this.active = false;
      this.isActivePoker = false;
      this.isActiveRetro = true;
  }
 poker():void{
      this.active = true;
      this.isActivePoker = true;
      this.isActiveRetro = false;
  }
  
   
}
