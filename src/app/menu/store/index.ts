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
}

export const initialState: ProductState = {
  droppedItems:undefined,
  prods:undefined,
  error:undefined
};

export const reducers= createReducer(
  initialState,
  on(fromActions.loadProductsSuccess, (state, action) => {
    return {
      prods: action.products,
      droppedItems: []
    }
  }),
  on(fromActions.loadProducts, (state, action) => {
    return {
      prods: state.prods,
      droppedItems: state.droppedItems
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
    return {
      prods: pd,
      droppedItems: di
    }
  }),
  on(fromActions.dropBack, (state, action) => {
    var l =  state.droppedItems.filter(({ id }) => id !== action.item.id);//this.removeItem(e.dragData, this.droppedItems)
    const d  = Object.assign([], state.prods); //this.prods.push(e.dragData);
    d.push(action.item);
    return {
      prods: d,
      droppedItems: l
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

export const metaReducers: MetaReducer<ProductState>[] = !environment.production ? [] : [];
