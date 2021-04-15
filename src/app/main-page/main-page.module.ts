import { SharedModule } from './../shared/shared.module';
import { MainPageRouteModule } from './main-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideAvatarComponent } from './components/side-avatar/side-avatar.component';



@NgModule({
  declarations: [MainPageComponent, SideMenuComponent, SideAvatarComponent],
  imports: [
    SharedModule,
    CommonModule,
    MainPageRouteModule
  ]
})
export class MainPageModule { }
