import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FirstConfigComponent} from "./components/first-config/first-config.component";

const routes: Routes = [
  {
    path: '',
    component: FirstConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthConfigRoutingModule {}
