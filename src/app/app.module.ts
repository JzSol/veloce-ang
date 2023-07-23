import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [AppComponent, ProductsHeaderComponent, ProductsPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
