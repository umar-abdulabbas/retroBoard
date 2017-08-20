import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent, DsService } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [DsService],
  bootstrap: [AppComponent]
})
export class AppModule { }