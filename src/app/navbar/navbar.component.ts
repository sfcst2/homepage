import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GadgetWizardComponent } from '../gadget-wizard/gadget-wizard.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  widgetWizardClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showWidgetWizard(event: any): void {
    console.log('clicked the show widget wizard');
    this.widgetWizardClicked.emit();
  }

}
