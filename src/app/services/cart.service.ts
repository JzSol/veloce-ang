import { Injectable } from '@angular/core';
import { Cup } from '../types/cup.types';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems = new BehaviorSubject<any>([]);

  constructor(private countService: CountService) {}

  getCartItems(): Observable<Cup[]> {
    return this.cartItems.asObservable();
  }

  addToCart(cup: Cup) {
    const isSameCup = (item: Cup) =>
      item.id === cup.id &&
      item.choosenSize === cup.choosenSize &&
      item.title === cup.title &&
      item.IsSugarAdded === cup.IsSugarAdded;

    const existingCup = this.cartItems.value.find(isSameCup);

    if (existingCup) {
      existingCup.qty++;
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
    const isSameCup = (item: Cup) =>
      item.id === cup.id &&
      item.choosenSize === cup.choosenSize &&
      item.title === cup.title;

    const cupInCart = this.cartItems.value.find(isSameCup);
    if (cupInCart) {
      cupInCart.qty++;
      this.cartItems.next([...this.cartItems.value]);
      this.countService.incrementCount();
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
      this.countService.decrementCount();
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
