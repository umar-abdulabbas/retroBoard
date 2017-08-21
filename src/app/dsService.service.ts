import { Component, Injectable } from '@angular/core';

declare var deepstream:any;

@Injectable()
export class DsService {
  get dsInstance() {
    return deepstream('wss://154.deepstreamhub.com?apiKey=86ec8a85-5b1f-483f-9528-11eee5e6fbd2').login()
  }
}
