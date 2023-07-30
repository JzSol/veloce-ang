import { Component } from '@angular/core';
import { Cup } from '../types/cup.types';
import { DataService } from '../services/data.service';
import { ProductDetailService } from '../services/product-detail.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-products-sidebar',
  templateUrl: './products-sidebar.component.html',
  styleUrls: ['./products-sidebar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(100%, 0, 0)',
        })
      ),
      transition('in => out', animate('800ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out')),
    ]),
  ],
})
export class ProductsSidebarComponent {
  data: Cup[] = [];
  openModal: boolean = false;
  selectedCup: Cup | undefined;
  menuState: string = 'out';

  constructor(
    private dataService: DataService,
    private detailsService: ProductDetailService
  ) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: { cups: Cup[] }) => {
      this.data = data.cups;
    });
    this.detailsService.openModal$.subscribe((isOpen: boolean) => {
      this.openModal = isOpen;
      console.log('openModal:', this.openModal);
      this.menuState = this.openModal ? 'in' : 'out';
    });
    this.detailsService.selectedProduct$.subscribe((selectedCup: Cup) => {
      this.selectedCup = selectedCup;
      console.log(this.selectedCup);
    });
  }

  onButtonClick2() {
    this.detailsService.openModal(false);
  }
}
