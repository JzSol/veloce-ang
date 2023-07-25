import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/counter.service';
import { Cup } from '../types/cup.types';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  data: Cup[] = [];

  constructor(
    private countService: CountService,
    private dataService: DataService
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
      this.countService.incrementCount();
      cup.isChecked = false;
      cup.choosenSize = '';
      cup.buttonClicked = false;
    }
  }

  count = 0;

  incrementCount() {
    this.count++;
  }
}
