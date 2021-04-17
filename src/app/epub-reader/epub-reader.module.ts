import {SharedModule} from './../shared/shared.module';
import {EpubReaderRoutingModule} from './epub-reader-routing.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EpubReaderComponent} from './epub-reader.component';
import {ReaderHeaderComponent} from './components/reader-header/reader-header.component';
import {ReaderProgressIndicatorComponent} from './components/reader-progress-indicator/reader-progress-indicator.component';
import {ReaderBookmarkListItemComponent} from './components/reader-bookmark-list-item/reader-bookmark-list-item.component';
import {ReaderChapterListItemComponent} from './components/reader-chapter-list-item/reader-chapter-list-item.component';
import {ReaderChapterListContainerComponent} from './components/reader-chapter-list-container/reader-chapter-list-container.component';
import {ReaderBookmarkListContainerComponent} from './components/reader-bookmark-list-container/reader-bookmark-list-container.component';
import {ReaderContentContainerComponent} from './components/reader-content-container/reader-content-container.component';


@NgModule({
  declarations: [EpubReaderComponent, ReaderHeaderComponent, ReaderProgressIndicatorComponent, ReaderBookmarkListItemComponent, ReaderChapterListItemComponent, ReaderChapterListContainerComponent, ReaderBookmarkListContainerComponent, ReaderContentContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    EpubReaderRoutingModule
  ]
})
export class EpubReaderModule {
}
