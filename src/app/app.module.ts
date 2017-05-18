import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './components/home/custom-modal-sample';

import { CustomModalContext2, CustomModal2 } from './components/modal/custom-modal';
import {TempComponent} from './components/temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomModal,
    CustomModal2,
    TempComponent
  ],
  imports: [
    BrowserModule,
     ModalModule.forRoot(),
      BootstrapModalModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent],
  entryComponents: [CustomModal,CustomModal2]
})
export class AppModule { }
