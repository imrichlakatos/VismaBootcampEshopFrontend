import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import {RouterLink} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class CoreModule { }
