import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Cup } from '../types/cup.types';

@Injectable({
  providedIn: 'root',
})
export class DataResolverService {
  constructor(private dataService: DataService) {}

  resolve(): Observable<Cup> {
    return this.dataService.getData();
  }
}
