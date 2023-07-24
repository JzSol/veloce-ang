import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./products-page/products-page.module').then(
        (m) => m.ProductsPageModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./products-cart/products-cart.module').then(
        (m) => m.ProductsCartModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
