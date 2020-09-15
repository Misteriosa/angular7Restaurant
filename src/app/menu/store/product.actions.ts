import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

export const loadProducts = createAction(
  '[MenuComponent] Load Products'
);

export const loadProductsSuccess = createAction(
  '[MenuComponent] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[MenuComponent] Load Products Failure',
  props<{ error: any }>()
);

export const dropInBox = createAction(
  '[MenuComponent] Drop product in box',
  props<{ item: any }>()
);

export const dropBack = createAction(
  '[MenuComponent] Drop product back',
  props<{  item: any }>()
);

export const resetTotal = createAction(
  '[MenuComponent] Reset total price'
);
