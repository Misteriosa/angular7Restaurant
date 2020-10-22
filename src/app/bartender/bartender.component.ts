import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {of, Observable } from 'rxjs';
import { ProductState,selectTable, selectDropped } from '../menu/store';
import { Product } from '../menu/models/product';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-bartender',
  templateUrl: './bartender.component.html',
  styleUrls: ['./bartender.component.scss']
})
export class BartenderComponent implements OnInit {
  table$:Observable<number>;
  selectedItems$:Observable<Product[]>;
  form: FormGroup;
  ordersData = [];

  get ordersFormArray() {
   return this.form.controls.orders as FormArray;
 }


  constructor(private store: Store<ProductState>, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
     orders: new FormArray([])
   });

   // async orders (could be a http service call)
   of(this.getOrders()).subscribe(orders => {
     this.ordersData = orders;
     this.addCheckboxes();
   });
  }

  private addCheckboxes() {
      this.ordersData.forEach(() => this.ordersFormArray.push(new FormControl(false)));
    }

    getOrders() {
      return [
        { id: 100, name: 'order 1' },
        { id: 200, name: 'order 2' },
        { id: 300, name: 'order 3' },
        { id: 400, name: 'order 4' }
      ];
    }

    submit() {
      const selectedOrderIds = this.form.value.orders
        .map((v, i) => v ? this.ordersData[i].id : null)
        .filter(v => v !== null);
      console.log(selectedOrderIds);
    }
  ngOnInit() {
    this.table$=this.store.pipe(select(selectTable));
    this.selectedItems$=this.store.pipe(select(selectDropped)); //TODO: CHANGE from dropped to only checked out items 
  }

}
