import {SharedModule} from './../shared/shared.module';
import {BookmarkMgrRouteModule} from './bookmark-mgr-routing.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarkMgrComponent} from './bookmark-mgr.component';
import {EbookListItemComponent} from './components/ebook-list-item/ebook-list-item.component';
import {BookmarkListItemComponent} from './components/bookmark-list-item/bookmark-list-item.component';
import {EbookListContainerComponent} from './components/ebook-list-container/ebook-list-container.component';
import {BookmarkListContainerComponent} from './components/bookmark-list-container/bookmark-list-container.component';


@NgModule({
  declarations: [BookmarkMgrComponent, EbookListItemComponent, BookmarkListItemComponent, EbookListContainerComponent, BookmarkListContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    BookmarkMgrRouteModule
  ]
})
export class BookmarkMgrModule {
}
