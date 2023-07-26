import { Injectable } from '@angular/core';
import { Cup } from '../types/cup.types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems = new BehaviorSubject<any>([]);

  getCartItems(): Observable<Cup[]> {
    return this.cartItems.asObservable();
  }

  addToCart(cup: Cup) {
    this.cartItems.next([...this.cartItems.value, cup]);

    const existingCup = this.cartItems.value.find(
      (item: any) => item.id === cup.id
    );

    if (existingCup) {
      existingCup.quantity++;
    } else {
      cup.quantity = 1;
      this.cartItems.next([...this.cartItems.value, cup]);
    }
  }

  removeFromCart(cup: Cup) {
    const updatedCartItems = this.cartItems.value.filter(
      (item: any) => item !== cup
    );
    this.cartItems.next(updatedCartItems);
  }

  private qty = new BehaviorSubject<number>(0);

  currentQty: Observable<number> = this.qty.asObservable();

  incrementQty(cup: Cup) {
    const cupInCart = this.cartItems.value.find(
      (item: { id: any }) => item.id === cup.id
    );
    if (cupInCart) {
      cupInCart.qty++;
      this.cartItems.next([...this.cartItems.value]);
    }
  }

  decrementQty(cup: Cup) {
    const cupInCart = this.cartItems.value.find(
      (item: { id: any }) => item.id === cup.id
    );
    if (cupInCart && cupInCart.qty > 0) {
      cupInCart.qty--;
      if (cupInCart.qty === 0) {
        this.removeFromCart(cupInCart);
      } else {
        this.cartItems.next([...this.cartItems.value]);
      }
    }
  }

  getTotalPrice(): number {
    let total = 5;

    this.cartItems.value.forEach((item: Cup) => {
      if (item.choosenSize !== undefined) {
        total += item.price[item.choosenSize] * item.qty;
      }
    });

    return parseFloat(total.toFixed(2));
  }
}
