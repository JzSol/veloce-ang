import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cup } from '../types/cup.types';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  private selectedProductSource = new Subject<Cup>();
  private openModalSource = new Subject<boolean>();

  openModal$ = this.openModalSource.asObservable();
  selectedProduct$ = this.selectedProductSource.asObservable();

  setSelectedProduct(cup: Cup) {
    this.selectedProductSource.next(cup);
  }

  openModal(isOpen: boolean) {
    this.openModalSource.next(isOpen);
  }
}
