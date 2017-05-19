import { Component, OnInit , ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { Overlay, overlayConfigFactory ,OverlayRenderer } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { CustomModalContext, CustomModal } from './custom-modal-sample';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
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
        .title('แจ้งเตือนข้อมูล')
        .body(`
            <h4>ตัวอย่าง Modal แจ้งเตือนข้อมูล</h4>
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
