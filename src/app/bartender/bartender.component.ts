import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Observable } from 'rxjs';
import { ProductState,selectTable, selectDropped } from '../menu/store';
import { Product } from '../menu/models/product';

@Component({
  selector: 'app-bartender',
  templateUrl: './bartender.component.html',
  styleUrls: ['./bartender.component.scss']
})
export class BartenderComponent implements OnInit {
  table$:Observable<number>;
  selectedItems$:Observable<Product[]>;

  constructor(private store: Store<ProductState>) { }

  ngOnInit() {
    this.table$=this.store.pipe(select(selectTable));
    this.selectedItems$=this.store.pipe(select(selectDropped));
  }

}
