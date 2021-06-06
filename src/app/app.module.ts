// 业务模块导入
import {MainPageModule} from './main-page/main-page.module';
import {LibraryMgrModule} from './library-mgr/library-mgr.module';
import {RecentReadingModule} from './recent-reading/recent-reading.module';
import {SysPreferencesModule} from './sys-preferences/sys-preferences.module';
import {BookmarkMgrModule} from './bookmark-mgr/bookmark-mgr.module';

// 核心模块导入
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DBConfig, NgxIndexedDBModule} from "ngx-indexed-db";
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// NG Translate
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AuthConfigModule} from "./auth-config/auth-config.module";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// 应用数据库配置
const dbConfig: DBConfig = {
  name: 'epub.reader.pc',
  version: 1,
  objectStoresMeta: [
    // 用户账户表
    { store: 'accountUser', storeConfig: {keyPath: 'accountId', autoIncrement: false},
      storeSchema: [
        { name: 'userName', keypath: 'userName', options: { unique: true } },
        { name: 'userToken', keypath: 'userToken', options: { unique: true } }
      ]
    },
    // 电子书缓存表
    {
      store: 'readingBooks', storeConfig: {keyPath: 'bookId', autoIncrement: false},
      storeSchema: [
        { name: 'currentProgressIndex', keypath: 'currentProgressIndex', options: { unique: true } },
        { name: 'coverUrl', keypath: 'coverUrl', options: { unique: true } },
        { name: 'bookFileUrl', keypath: 'bookFileUrl', options: { unique: true } }

      ]
    },
    // 应用配置表
    {
      store: 'appConfig', storeConfig: {keyPath: 'configId', autoIncrement: false},
      storeSchema: [
        { name: 'configKey', keypath: 'configValue', options: { unique: true } }
      ]
    }
  ]
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
    // 应用数据库模块
    NgxIndexedDBModule.forRoot(dbConfig),
    // 业务模块
    AuthConfigModule,
    MainPageModule,
    LibraryMgrModule,
    BookmarkMgrModule,
    SysPreferencesModule,
    RecentReadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
