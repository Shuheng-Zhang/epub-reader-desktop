import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysPreferencesComponent } from './sys-preferences.component';
import { SysPerferencesRouteModule } from './sys-preferences-routing.module';
import { OptionSyncComponent } from './components/option-sync/option-sync.component';
import { OptionCachesComponent } from './components/option-caches/option-caches.component';
import { OptionThemeComponent } from './components/option-theme/option-theme.component';
import { OptionLocationComponent } from './components/option-location/option-location.component';



@NgModule({
  declarations: [SysPreferencesComponent, OptionSyncComponent, OptionCachesComponent, OptionThemeComponent, OptionLocationComponent],
  imports: [
    CommonModule,
    SharedModule,
    SysPerferencesRouteModule
  ]
})
export class SysPreferencesModule { }
