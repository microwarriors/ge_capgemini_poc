import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { RouterModule,Routes }   from '@angular/router';
import { DataDetailsComponent } from './data-details/data-details.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { ChartsModule } from 'ng2-charts';
import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { AgmCoreModule } from '@agm/core';
import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe }   from './table.pipe';

import { ChartModule } from 'angular2-highcharts';

 


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
  { path: 'data',  component: DataComponent },
  {path:'dataDetails', component: DataDetailsComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    DataDetailsComponent,
  FooterComponent,
    LoginComponent,
	DataFilterPipe

  ],
  imports: [
    BrowserModule,
	   RouterModule.forRoot(routes),
      ChartModule.forRoot(require('highcharts')),
	   HttpModule,
	   FormsModule,
	   ReactiveFormsModule,
     
	    VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
		ChartsModule,
		BrowserModule, 
    DataTableModule,
		AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBli14IYUYuWrKb0hicJVvSWlUTdwcOWoU'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
