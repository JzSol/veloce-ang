import { Component } from '@angular/core';
import { CountService } from '../counter.service';

interface Cup {
  cupImg: string;
  stamp?: boolean;
  price: string;
  title: string;
  size1: number;
  size2: number;
  IsSugar: string;
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent {
  constructor(private countService: CountService) {}

  increment() {
    this.countService.incrementCount();
  }

  cups: Cup[] = [
    {
      cupImg: '../../Images/Cup.png',
      stamp: true,
      price: '../../Images/Price.png',
      title: 'ExtraLatte',
      size1: 250,
      size2: 500,
      IsSugar: 'add Sugar',
    },
    {
      cupImg: '../../Images/Cup2.png',
      price: '../../Images/Price2.png',
      title: 'Cappuccino',
      size1: 250,
      size2: 500,
      IsSugar: 'add Sugar',
    },
    {
      cupImg: '../../Images/Cup3.png',
      price: '../../Images/Price3.png',
      title: 'Moccachino',
      size1: 250,
      size2: 500,
      IsSugar: 'add Sugar',
    },
  ];

  count = 0;

  incrementCount() {
    this.count++;
  }
}
