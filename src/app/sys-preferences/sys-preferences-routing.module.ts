import {SysPreferencesComponent} from './sys-preferences.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SysPreferencesComponent,
    children: []
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SysPerferencesRouteModule {
}
