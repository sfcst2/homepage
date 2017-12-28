import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: HomepageComponent },
    { path: 'table-list',     component: DashboardComponent },
    { path: 'typography',     component: DashboardComponent },
    { path: 'icons',          component: DashboardComponent },
    { path: 'maps',           component: DashboardComponent },
    { path: 'notifications',  component: DashboardComponent },
    { path: 'upgrade',        component: DashboardComponent },
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, NavbarComponent, DashboardComponent, HomepageComponent
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
  bootstrap: [AppComponent]  
})
export class AppModule { }
