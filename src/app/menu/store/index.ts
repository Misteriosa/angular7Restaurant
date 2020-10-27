import { undoRedo } from 'ngrx-undo-redo';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
}
from '@ngrx/store';
import { filter } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import * as fromActions from './product.actions';
import { Product } from '../models/product';

export const productStateFeatureKey = 'productState';

export interface ProductState {
  droppedItems:Product[];
  prods:Product[];
  error:any;
  total: number;
  table: number;
  checkedItems:Product[];
  totalChecked: number;
  servedItems:Product[];
}

export const initialState: ProductState = {
  droppedItems:undefined,
  prods:undefined,
  error:undefined,
  total:0,
  table:0,
  checkedItems:undefined,
  totalChecked:0,
  servedItems: []
};

export const reducers= createReducer(
  initialState,
  on(fromActions.loadProductsSuccess, (state, action) => {
    return {
      prods: action.products,
      error: state.error,
      droppedItems: state.droppedItems,
      total: state.total,
      table: action.table,
      checkedItems: state.checkedItems,
      totalChecked: state.totalChecked,
      servedItems: state.servedItems
    }
  }),
  on(fromActions.loadProducts, (state, action) => {
    return {
      prods: state.prods,
      error: state.error,
      droppedItems: state.droppedItems,
      total: state.total,
      table: state.table,
      checkedItems: state.checkedItems,
      totalChecked: state.totalChecked,
      servedItems: state.servedItems
    }
  }),/*
  on(fromActions.loadProductsFailure, (state, action) => {
    return {
      prods: state.prods,
      error: action.error
    }
  })*/
  on(fromActions.dropInBox, (state, action) => {
  //console.log('action.item '+ JSON.stringify(action.item)); //console.log( action.item.id);  //console.log(state.prods.filter(({ id }) => id !== action.item.id));
   var pd=  state.prods.filter(({ id }) => id !== action.item.id);
   const di  = Object.assign([], state.droppedItems);
   di.push(action.item);
   var n:number=+action.item.price;
   /*console.log('.............n...',n,' state.total ',state.total );
   console.log('state.total +n',state.total +n);*/
    return {
      prods: pd,
      error: state.error,
      droppedItems: di,
      total: state.total + n,
      table: state.table,
      totalChecked: state.totalChecked,
      checkedItems: state.checkedItems,
      servedItems: state.servedItems
    }
  }),
  on(fromActions.dropBack, (state, action) => {
    var l =  state.droppedItems.filter(({ id }) => id !== action.item.id);//this.removeItem(e.dragData, this.droppedItems)
    const d  = Object.assign([], state.prods); //this.prods.push(e.dragData);
    d.push(action.item);
    //suma(-action.item.price);//remove price
    var n:number=+action.item.price;
    /*console.log('.............n...',n,' state.total ',state.total );
    console.log('state.total -n',state.total -n);*/
    return {
      prods: d,
      error: state.error,
      droppedItems: l,
      total: state.total - n,
      table: state.table,
      checkedItems: state.checkedItems,
      totalChecked: state.totalChecked,
      servedItems: state.servedItems
    }
  }),

  on(fromActions.resetTotal, (state, action) => {
    return {
      prods: state.prods,
      error: state.error,
      droppedItems: state.droppedItems,
      total: 0,
      table: state.table,
      checkedItems: state.checkedItems,
      totalChecked: state.totalChecked,
      servedItems: state.servedItems
    }
  }),
  on(fromActions.checkOutItems, (state, action) => {//append previous new checked items to checkedItems
    const d  = Object.assign([], state.checkedItems);
    const its = d.concat(state.droppedItems);//cant use .push, because it push the entire array [] and not the items of the array
    return {
      prods: state.prods,
      error: state.error,
      checkedItems: its,
      droppedItems: [], //cleans the cart dropped items
      totalChecked: state.total, //TODO: add the value to the old
      total: 0, //zeroes the cart total
      table: state.table, //hardoced to 1 in loadProductsSuccess in menu.component.ts
      servedItems: state.servedItems
    }
  }),
  on(fromActions.serveItems, (state, action) => {
//    var ci=  state.checkedItems.filter(({id}) => !(state.servedItems.some(item => id === item.id)));
    //get the checkedItems without the served ones
    function notInServedItems(id: string, state: ProductState){
      for (var i = 0; i < action.servedItems.length; ++i) {
        //console.log("id, state.id " + id + " " + state.servedItems[i].id);
        if (id === action.servedItems[i].id) {
            return false;
        }
      }
      return true;
    }
    return {
      droppedItems: state.droppedItems,
      prods: state.prods,
      error: state.error,
      total: state.total,
      table: state.table, //hardoced to 1 in loadProductsSuccess in menu.component.ts
      checkedItems: state.checkedItems.filter(({id}) => notInServedItems(id, state)), //checkedItems - servedItems
      totalChecked: state.totalChecked,
      servedItems: action.servedItems
    }
  })
);

export function reducer(state, action) {
  return reducers(state, action);
}

export const selectProdsFeature = createFeatureSelector<ProductState>(productStateFeatureKey);

export const selectProds = createSelector(
  selectProdsFeature,
  (state: ProductState) => state.prods
);
export const selectDropped = createSelector(
  selectProdsFeature,
  (state: ProductState) => state.droppedItems
);
export const selectTotal = createSelector(
  selectProdsFeature,
  (state: ProductState) => state.total
);
export const selectTable = createSelector(
  selectProdsFeature,
  (state: ProductState) => state.table
);
export const selectChecked = createSelector(
  selectProdsFeature,
  (state: ProductState) => state.checkedItems
);
export const selectTotalChecked = createSelector(
  selectProdsFeature,
  (state: ProductState) => state.totalChecked
);
export const selectServed = createSelector(
  selectProdsFeature,
  (state: ProductState) => state.servedItems
);
/*
export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [undoRedo(
  {
        maxBufferSize: 15,
        allowedActions: [fromActions.loadProductsSuccess, fromActions.dropInBox, fromActions.dropBack]
  }
)] : [undoRedo(
  {
        maxBufferSize: 15,
        allowedActions: [fromActions.loadProductsSuccess, fromActions.dropInBox, fromActions.dropBack]
  }
)];

export function getMetaReducers(): MetaReducer<ProductState>[] {
 return metaReducers;
}*/
export const metaReducers: MetaReducer<ProductState> = !environment.production ? undoRedo(
  {
        maxBufferSize: 15,
        allowedActions: [fromActions.loadProductsSuccess, fromActions.dropInBox, fromActions.dropBack]
  }
) : undoRedo(
  {
        maxBufferSize: 15,
        allowedActions: [fromActions.loadProductsSuccess, fromActions.dropInBox, fromActions.dropBack]
  }
);

export function getMetaReducers(): MetaReducer<ProductState> {
 return metaReducers;
}


/*export function mtaReducers(state, action) {
  return reducers(state, action);
}*/
