import {SharedModule} from './../shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecentReadingComponent} from './recent-reading.component';
import {RecentReadingRouteModule} from './recent-reading-routing.module';
import {ReadingListItemComponent} from './components/reading-list-item/reading-list-item.component';
import {ReadingListContainerComponent} from './components/reading-list-container/reading-list-container.component';


@NgModule({
  declarations: [RecentReadingComponent, ReadingListItemComponent, ReadingListContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    RecentReadingRouteModule
  ]
})
export class RecentReadingModule {
}
