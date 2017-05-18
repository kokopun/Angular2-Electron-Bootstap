import { Component, OnInit , ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { Overlay, overlayConfigFactory ,OverlayRenderer } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { CustomModalContext, CustomModal } from './custom-modal-sample';

@Component({
  selector: 'app-home',
 // templateUrl: './home.component.html',
   template: `
  <span defaultOverlayTarget></span>
  <h1>angular2-modal</h1>
  <h2>Basic Modal sample</h2>
  <button (click)="onClick()">Alert</button>
    <br>
  <h2>Custom Modal example:</h2>
  <button (click)="openCustom()">Custom Modal</button>
  <p>
  <b>IMPORTANT:</b>
  Since 'AdditionCalculateWindow' is never explicitly used (in a template)
  we must tell angular about it by adding it to the <strong>entryComponents</strong> property in the module meta.
  </p>
  
  <h2>See systemjs.config.js implementation for UMD vs module loading</h2>
   <a routerLink="/temp">Dashboard</a>
  `,
  styleUrls: ['./home.component.scss'],
   providers: [Modal,Overlay]
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor(public modal: Modal) {
  }

  ngOnInit() {
  }
 onClick() {
    this.modal.alert()
        .size('lg')
        .showClose(false)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }
  
  openCustom() {

 


   return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }

}
