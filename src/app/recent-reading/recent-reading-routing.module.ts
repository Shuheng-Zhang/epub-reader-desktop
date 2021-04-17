import {RecentReadingComponent} from './recent-reading.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: RecentReadingComponent,
    children: []
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentReadingRouteModule {
}
