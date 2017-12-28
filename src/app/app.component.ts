import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { GadgetWizardComponent } from './gadget-wizard/gadget-wizard.component';
import { HomepageComponent } from './homepage/homepage.component';

declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild("dynamicContainer", { read: ViewContainerRef }) container;
 componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void{
    $.material.init();
    //this.createHomepageContent();
  }

  createGadgetComponent() {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(GadgetWizardComponent);

    this.componentRef = this.container.createComponent(factory);
    // this.componentRef.instance.output.subscribe(event => console.log(event));

  }

  createHomepageContent() {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(HomepageComponent);
    this.componentRef = this.container.createComponent(factory);
  }

  widgetWizardClicked(): void {
    console.log('got the click in the app');
    this.createGadgetComponent();
  }



  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
