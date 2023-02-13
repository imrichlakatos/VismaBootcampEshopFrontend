import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {RouterLink} from "@angular/router";
import {ProductsRoutingModule} from "./products-routing.module";


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ProductsRoutingModule,
  ]
})
export class ProductsModule {
}
