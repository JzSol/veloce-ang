import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  private count = new BehaviorSubject<number>(0);

  currentCount: Observable<number> = this.count.asObservable();

  incrementCount() {
    this.count.next(this.count.value + 1);
  }

  decrementCount() {
    this.count.next(this.count.value > 0 ? this.count.value - 1 : 0);
  }
}
