import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MenuBarComponent
  ],
  exports: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MenuModule { }
