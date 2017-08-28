import { Component, OnInit, Injectable} from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { DsService } from '../dsService.service';

export class templates{
    name:string;
}
const TEMPLATES: templates[] = [
     {'name': 'Single Col Template'},
     {'name': 'Multi Col Template'}
    
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uniqueId;
  records;
  lists;
  templates;
  px;
  constructor(private router:Router, private dsService: DsService) { }

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

  add(content:string, comment:string){
   var sendData = {
      content:content,
      comment:comment
   }
    this.templates.push(sendData);
    console.log(this.templates);
    const card = this.records.getRecord('check/j6sey9dg-1u9u19cvi8r');
    card.whenReady((record) => {
      console.log(record);
      card.set(this.templates);
      
    })
  }
  
   
}
