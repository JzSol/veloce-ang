import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCartComponent } from './products-cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductsCartComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductsCartModule {}
