import { Component, Injectable } from '@angular/core';

declare var deepstream:any;

@Injectable()
export class DsService {
  get dsInstance() {
    return deepstream('wss://154.deepstreamhub.com?apiKey=9d515933-3da3-475f-b3a4-bd14949a1ab1').login()
  }
}
