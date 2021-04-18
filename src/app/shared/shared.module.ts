import {NgAntdModule} from './ng-antd';
import {PrimeNgModule} from './prime-ng';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TranslateModule} from '@ngx-translate/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {
  CommsDividerComponent,
  CommsSearchingBarComponent,
  CommsTitleHeaderComponent,
  PageNotFoundComponent,
  PlaceholderSpaceComponent
} from './components/';
import {WebviewDirective} from './directives/';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, CommsSearchingBarComponent, PlaceholderSpaceComponent, CommsTitleHeaderComponent, CommsDividerComponent],
  imports: [CommonModule, TranslateModule, FormsModule, PrimeNgModule, NgAntdModule, InfiniteScrollModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, PrimeNgModule, NgAntdModule, InfiniteScrollModule, CommsSearchingBarComponent, PlaceholderSpaceComponent, CommsTitleHeaderComponent, CommsDividerComponent]
})
export class SharedModule {
}
