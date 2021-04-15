import { BookmarkListContainerComponent } from './components/bookmark-list-container/bookmark-list-container.component';
import { BookmarkMgrComponent } from './bookmark-mgr.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: BookmarkMgrComponent,
        children: [
            {
                path: 'book/:ebookId',
                component: BookmarkListContainerComponent
            }
        ]
    },
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookmarkMgrRouteModule {}