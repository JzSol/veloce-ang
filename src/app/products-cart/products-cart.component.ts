import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CountService } from '../services/counter.service';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: [
    './products-cart.component.scss',
    './product-checkout.component.scss',
  ],
})
export class ProductsCartComponent implements OnInit {
  qty: any;

  count: number | undefined;
  items: any;

  constructor(
    public cartService: CartService,
    private countService: CountService
  ) {
    this.cartService.getCartItems().subscribe((items) => (this.items = items));
  }
  ngOnInit(): void {}

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }

  incrementQty(item: any) {
    this.cartService.incrementQty(item);
    item.qty = item.qty;
  }

  decrementQty(item: any) {
    this.cartService.decrementQty(item);
    item.qty = item.qty;
  }

  calculateTotalPrice(price: number, qty: number) {
    return price * qty;
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
}
