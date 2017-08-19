import { Component, OnInit, Injectable } from '@angular/core';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
declare var deepstream:any;
@Injectable()
export class DsService {
  get dsInstance() {
    return deepstream('<YOUR APP URL>').login()
  }
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onCreate(){

  }s
}
