import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GadgetWizardComponent } from './gadget-wizard/gadget-wizard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,    
    ToptoolbarComponent, HomepageComponent, GadgetWizardComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[GadgetWizardComponent, HomepageComponent]
})
export class AppModule { }
