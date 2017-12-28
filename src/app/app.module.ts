import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { ToptoolbarComponent } from './toptoolbar/toptoolbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GadgetWizardComponent } from './gadget-wizard/gadget-wizard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =[
    { path: 'dashboard',      component: GadgetWizardComponent },
    { path: 'user-profile',   component: GadgetWizardComponent },
    { path: 'table-list',     component: GadgetWizardComponent },
    { path: 'typography',     component: GadgetWizardComponent },
    { path: 'icons',          component: GadgetWizardComponent },
    { path: 'maps',           component: GadgetWizardComponent },
    { path: 'notifications',  component: GadgetWizardComponent },
    { path: 'upgrade',        component: GadgetWizardComponent },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,    
    ToptoolbarComponent, HomepageComponent, GadgetWizardComponent,
     SidebarComponent, NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[GadgetWizardComponent, HomepageComponent]
})
export class AppModule { }
