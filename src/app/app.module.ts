import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsSidebarComponent } from './products-sidebar/products-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductsHeaderComponent,
    ProductsPageComponent,
    ProductsCartComponent,
    ProductsSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
