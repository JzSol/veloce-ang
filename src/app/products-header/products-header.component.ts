import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent implements OnInit, OnDestroy {
  incrementCount() {
    throw new Error('Method not implemented.');
  }
  count = 0;
  private countSubscription?: Subscription;

  constructor(private countService: CountService) {}

  ngOnInit() {
    this.countSubscription = this.countService.currentCount.subscribe(
      (c) => (this.count = c)
    );
  }

  ngOnDestroy() {
    this.countSubscription?.unsubscribe();
  }
}
