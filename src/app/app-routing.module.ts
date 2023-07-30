import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './services/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./products-page/products-page.module').then(
        (m) => m.ProductsPageModule
      ),
    resolve: { data: DataResolverService },
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
