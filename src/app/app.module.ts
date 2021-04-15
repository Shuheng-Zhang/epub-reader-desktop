// 业务模块导入
import { MainPageModule } from './main-page/main-page.module';
import { LibraryMgrModule } from './library-mgr/library-mgr.module';
import { RecentReadingModule } from './recent-reading/recent-reading.module';
import { SysPreferencesModule } from './sys-preferences/sys-preferences.module';
import { BookmarkMgrModule } from './bookmark-mgr/bookmark-mgr.module';

// 核心模块导入
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // 业务模块
    MainPageModule,
    LibraryMgrModule,
    BookmarkMgrModule,
    SysPreferencesModule,
    RecentReadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
