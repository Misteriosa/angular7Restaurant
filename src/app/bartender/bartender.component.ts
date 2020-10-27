import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {of, Observable } from 'rxjs';
import { ProductState,selectTable, selectChecked ,selectServed} from '../menu/store';
import { Product } from '../menu/models/product';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { map } from 'rxjs/operators';
import * as fromActions from '../menu/store/product.actions';

@Component({
  selector: 'app-bartender',
  templateUrl: './bartender.component.html',
  styleUrls: ['./bartender.component.scss']
})
export class BartenderComponent implements OnInit {
  table$:Observable<number>;
  selectedItems$:Observable<Product[]>;
  form: FormGroup;

  ngOnInit() {
    this.table$=this.store.pipe(select(selectTable));
    this.selectedItems$=this.store.pipe(select(selectChecked)); //items that client checked out after dropped in the cart
    this.selectedItems$.subscribe(orders => {
      orders.forEach(a => {
        this.ordersFormArray.push(new FormControl(false));
        //console.log('order '+ a.id);
      });
    });
  }

  get ordersFormArray() {
   return this.form.controls.orders as FormArray;
  }

  constructor(private store: Store<ProductState>, private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
       orders: new FormArray([])
     });
  }

  //add form controls for each item
  private addCheckboxes() {
      this.selectedItems$.forEach(() => this.ordersFormArray.push(new FormControl(false)));
    }

    //gets the checked items from the form (the indexes) and calls getSelectedItem
   submit() {
      const selectedOrders: Product[] = this.form.value.orders
        .map((checked, i) =>//{
          //console.log("checked: "+ this.getOpportunityByIndex(i).prod)
          checked ? this.getSelectedItem(i) : null
        /*}*/).filter(v => v !== null);
      //console.log("selectedOrderIds: "+typeof(selectedOrders));
      //console.log("selectedOrderIds: "+selectedOrders[0]);
      this.store.dispatch(fromActions.serveItems({servedItems: selectedOrders}));
      //updates the client table in green

    }

    //returns the checked object
  getSelectedItem(index: number) {
    var it: Product;
    this.selectedItems$.subscribe( selectedIts => {
      //console.log("selectedIts[index].prod: " + typeof(selectedIts[index].prod));
      it= selectedIts[index];
    });
    return it;
  }

}
