import { Component, Injectable } from '@angular/core';

declare var deepstream:any;

@Injectable()
export class DsService {
  get dsInstance() {
    return deepstream('').login()
  }
}
