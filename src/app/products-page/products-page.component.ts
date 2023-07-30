import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/counter.service';
import { Cup } from '../types/cup.types';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
import { ProductDetailService } from '../services/product-detail.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: [
    './products-page.component.scss',
    './products-page2.component.scss',
  ],
})
export class ProductsPageComponent implements OnInit {
  data: Cup[] = [];

  constructor(
    private countService: CountService,
    private dataService: DataService,
    public cartService: CartService,
    private detailsService: ProductDetailService
  ) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: { cups: Cup[] }) => {
      this.data = data.cups;
    });
  }

  buttonClicked = false;

  increment(cup: Cup) {
    cup.buttonClicked = true;
    if (cup.choosenSize) {
      const cupCopy = { ...cup };
      this.cartService.addToCart(cupCopy);

      this.countService.incrementCount();
      cup.IsSugarAdded = false;
      cup.choosenSize = undefined;
      cup.buttonClicked = false;
    }
  }

  count = 0;

  incrementCount() {
    this.count++;
  }

  onButtonClick(cup: Cup) {
    this.detailsService.setSelectedProduct(cup);
    this.detailsService.openModal(true);
  }
}
