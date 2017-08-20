import { Component, OnInit, Injectable } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
declare var deepstream:any;
@Injectable()
export class DsService {
  get dsInstance() {
    return deepstream('wss://154.deepstreamhub.com?apiKey=86ec8a85-5b1f-483f-9528-11eee5e6fbd2').login()
  }
}
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
  templates = TEMPLATES;
  idx = new Date;
  id = this.idx.getDay() + this.idx.getDate() + this.idx.getTime();
  name;
  message;
  template;
  record;
  constructor(private router:Router, private dsService: DsService) { }

  ngOnInit() {
      
    //   this.record.subscribe((val) => {
    //   this.id; 
    //   this.name = val.name;
    //   this.message = val.message;
    //   this.template = val.template;
    // })
    console.log(this.id);
  }
  onCreate(name, message, template){
    this.record = this.dsService.dsInstance.record.getRecord('retro/'+this.id)
    this.record.set('id',this.id);
    this.record.set('name',name);
    this.record.set('message',message);
    this.record.set('template',template);
    this.router.navigate(['/template',this.id]);

  }
}