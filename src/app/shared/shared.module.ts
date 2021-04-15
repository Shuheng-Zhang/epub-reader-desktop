import { NgAntdModule } from './ng-antd/ng-antd.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent, CommsSearchingBarComponent, PlaceholderSpaceComponent, CommsTitleHeaderComponent, CommsDividerComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, CommsSearchingBarComponent, PlaceholderSpaceComponent, CommsTitleHeaderComponent, CommsDividerComponent],
  imports: [CommonModule, TranslateModule, FormsModule, PrimeNgModule, NgAntdModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, PrimeNgModule, NgAntdModule, CommsSearchingBarComponent, PlaceholderSpaceComponent, CommsTitleHeaderComponent, CommsDividerComponent]
})
export class SharedModule {}
