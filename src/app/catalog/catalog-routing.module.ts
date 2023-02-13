import {NgModule} from "@angular/core";
import {CatalogListComponent} from "./catalog-list/catalog-list.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: CatalogListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {
}
