import {EpubReaderComponent} from './epub-reader.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: EpubReaderComponent,
    children: []
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpubReaderRoutingModule {
}
