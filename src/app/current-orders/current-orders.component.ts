import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectTotalChecked, selectChecked } from "../menu/store";
import {Observable } from 'rxjs';
import { ProductState } from '../menu/store';
import { Product } from '../menu/models/product';

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.scss']
})
export class CurrentOrdersComponent implements OnInit {
  total$:Observable<number>;
  selectedItems$:Observable<Product[]>;

  constructor(private store: Store<ProductState>) { }

  ngOnInit() {
    this.total$=this.store.pipe(select(selectTotalChecked));
    this.selectedItems$=this.store.pipe(select(selectChecked));
  }

}
