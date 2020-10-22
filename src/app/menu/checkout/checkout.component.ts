import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import {Observable } from 'rxjs';
import { ProductState } from '../store';
import { selectTotalChecked, selectChecked } from "../store";
import { Product } from '../models/product';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  total$:Observable<number>;
  selectedItems$:Observable<Product[]>;

  constructor(private store: Store<ProductState>,  private route: Router) { }

  ngOnInit() {
    this.total$=this.store.pipe(select(selectTotalChecked));
    this.selectedItems$=this.store.pipe(select(selectChecked));
  }

}
