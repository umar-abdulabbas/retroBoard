import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {Directive, ElementRef, Input, OnInit,HostListener} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { DashboardComponent,  } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TemplatesComponent, } from './templates/templates.component';
import { DsService } from './dsService.service';
import { Draggable } from './drag.directive';
import { HighlightDirective } from './highlight.directive';
import { PokerComponent } from './poker/poker.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TemplatesComponent,
    Draggable,
    HighlightDirective,
    PokerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
