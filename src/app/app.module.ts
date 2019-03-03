import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ReactiveFormsModule }    from '@angular/forms';
// import { DockingLayoutModule } from '../../modules/dockinglayout.module';
// import { TreeModule } from '../../modules/tree.module';
// import { MenuModule } from '../../modules/menu.module';
// import { ChartModule } from '../../modules/chart.module';

import { jqxChartComponent } from '../assets/jqwidgets-ts/angular_jqxchart';
import { jqxDockingLayoutComponent } from '../assets/jqwidgets-ts/angular_jqxdockinglayout';
import { jqxMenuComponent } from '../assets/jqwidgets-ts/angular_jqxmenu';
import { jqxTreeComponent } from '../assets/jqwidgets-ts/angular_jqxtree';
import { jqxButtonComponent } from '../assets/jqwidgets-ts/angular_jqxbuttons';
import { jqxLayoutComponent } from '../assets/jqwidgets-ts/angular_jqxlayout';
import { jqxWindowComponent } from '../assets/jqwidgets-ts/angular_jqxwindow';

import { jqxCheckBoxComponent } from "../assets/jqwidgets-ts/angular_jqxcheckbox";
import { jqxTabsComponent } from "../assets/jqwidgets-ts/angular_jqxtabs";

@NgModule({
  declarations: [
      AppComponent,jqxCheckBoxComponent,jqxTabsComponent,jqxWindowComponent,jqxButtonComponent, jqxDockingLayoutComponent, jqxTreeComponent, jqxMenuComponent, jqxChartComponent,jqxLayoutComponent
  ],
  imports: [
      BrowserModule, CommonModule,  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }