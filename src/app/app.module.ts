import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsHeaderComponent,
    ProductsPageComponent,
    ProductsCartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
