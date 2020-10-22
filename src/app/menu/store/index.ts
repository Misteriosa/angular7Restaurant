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
}

export const initialState: ProductState = {
  droppedItems:undefined,
  prods:undefined,
  error:undefined,
  total:0,
  table:0,
  checkedItems:undefined,
  totalChecked:0,
};

export const reducers= createReducer(
  initialState,
  on(fromActions.loadProductsSuccess, (state, action) => {
    return {
      prods: action.products,
      droppedItems: state.droppedItems,
      total: state.total,
      table: action.table,
      checkedItems: state.checkedItems,
      totalChecked: state.totalChecked,
    }
  }),
  on(fromActions.loadProducts, (state, action) => {
    return {
      prods: state.prods,
      droppedItems: state.droppedItems,
      total: state.total,
      table: state.table,
      checkedItems: state.checkedItems
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
      droppedItems: di,
      total: state.total + n,
      table: state.table,
      checkedItems: state.checkedItems
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
      droppedItems: l,
      total: state.total - n,
      table: state.table,
      checkedItems: state.checkedItems
    }
  }),

  on(fromActions.resetTotal, (state, action) => {
    return {
      prods: state.prods,
      droppedItems: state.droppedItems,
      total: 0,
      table: state.table,
      checkedItems: state.checkedItems
    }
  }),
  on(fromActions.checkOutItems, (state, action) => {
    const d  = Object.assign([], state.checkedItems); //this.prods.push(e.dragData);
    const its = d.concat(state.droppedItems);
    return {
      prods: state.prods,
      checkedItems: its,
      droppedItems: [],
      totalChecked: state.total,
      total: 0,
      table: state.table
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
