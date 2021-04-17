import {SharedModule} from './../shared/shared.module';
import {LibraryMgrRouteModule} from './library-mgr-routing.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LibraryMgrComponent} from './library-mgr.component';
import {EbookInfoCardComponent} from './components/ebook-info-card/ebook-info-card.component';
import {EbookInfoGridContainerComponent} from './components/ebook-info-grid-container/ebook-info-grid-container.component';


@NgModule({
  declarations: [LibraryMgrComponent, EbookInfoCardComponent, EbookInfoGridContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    LibraryMgrRouteModule
  ]
})
export class LibraryMgrModule {
}
