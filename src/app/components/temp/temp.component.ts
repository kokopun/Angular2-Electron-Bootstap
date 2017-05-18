import { Component, OnInit , ViewContainerRef, ViewEncapsulation} from '@angular/core';
import { Overlay, overlayConfigFactory ,OverlayRenderer } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
   providers: [Modal,Overlay]
})
export class TempComponent implements OnInit {
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
  


}
