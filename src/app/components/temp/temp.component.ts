import { Component, OnInit , ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { Overlay, overlayConfigFactory ,OverlayRenderer } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext2, CustomModal2 } from '../modal/custom-modal';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
   providers: [Modal,Overlay]
})
export class TempComponent implements OnInit {
  title = `App works !`;

  constructor(public modal: Modal) {
//this.modal.open(CustomModal2,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));

  }

  ngOnInit() {
 this.openCustom();
  }

  openCustom() {
   return this.modal.open(CustomModal2,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  
}


} 
