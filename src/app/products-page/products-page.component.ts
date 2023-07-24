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
  isChecked: boolean;
  choosenSize: '250' | '500' | string;
  buttonClicked?: boolean;
}

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent {
  constructor(private countService: CountService) {}

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

  cups: Cup[] = [
    {
      cupImg: '../../Images/Cup.png',
      stamp: true,
      price: '../../Images/Price.png',
      title: 'ExtraLatte',
      size1: 250,
      size2: 500,
      IsSugar: 'add Sugar',
      isChecked: false,
      choosenSize: '',
      buttonClicked: false,
    },
    {
      cupImg: '../../Images/Cup2.png',
      price: '../../Images/Price2.png',
      title: 'Cappuccino',
      size1: 250,
      size2: 500,
      IsSugar: 'add Sugar',
      isChecked: false,
      choosenSize: '',
      buttonClicked: false,
    },
    {
      cupImg: '../../Images/Cup3.png',
      price: '../../Images/Price3.png',
      title: 'Moccachino',
      size1: 250,
      size2: 500,
      IsSugar: 'add Sugar',
      isChecked: false,
      choosenSize: '',
      buttonClicked: false,
    },
  ];

  count = 0;

  incrementCount() {
    this.count++;
  }
}
