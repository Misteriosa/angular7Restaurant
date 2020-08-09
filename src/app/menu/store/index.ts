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
}

export const initialState: ProductState = {
  droppedItems:undefined,
  prods:undefined,
  error:undefined,
  total:0
};

export const reducers= createReducer(
  initialState,
  on(fromActions.loadProductsSuccess, (state, action) => {
    return {
      prods: action.products,
      droppedItems: [],
      total: state.total
    }
  }),
  on(fromActions.loadProducts, (state, action) => {
    return {
      prods: state.prods,
      droppedItems: state.droppedItems,
      total: state.total
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
      total: state.total + n
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
      total: state.total - n
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
