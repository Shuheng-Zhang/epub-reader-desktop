import {MainPageComponent} from './main-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'library',
        loadChildren: () => import('../library-mgr/library-mgr.module').then(m => m.LibraryMgrModule)
      },
      {
        path: 'bookmark',
        loadChildren: () => import('../bookmark-mgr/bookmark-mgr.module').then(m => m.BookmarkMgrModule)
      },
      {
        path: 'recent_reading',
        loadChildren: () => import('../recent-reading/recent-reading.module').then(m => m.RecentReadingModule)
      },
      {
        path: 'sys_preferences',
        loadChildren: () => import('../sys-preferences/sys-preferences.module').then(m => m.SysPreferencesModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRouteModule {
}
