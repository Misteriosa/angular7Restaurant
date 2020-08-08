import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, StoreConfig  } from '@ngrx/store';
import * as fromProductState from './store';

//necessario para faz3r o undoRedo metaReducer funcionar no modo production:
//Injecting Feature Config
//https://ngrx.io/guide/store/recipes/injecting
export const FEATURE_CONFIG_TOKEN = new InjectionToken<StoreConfig<fromProductState.ProductState>>('productState');

export function getConfig(): StoreConfig<fromProductState.ProductState> {
  // return the config synchronously.
  return {
    //initialState: someService.getInitialState(),

    metaReducers: [
      fromProductState.getMetaReducers()
    ]
  };
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProductState.productStateFeatureKey,
      fromProductState.reducer, FEATURE_CONFIG_TOKEN/*,
      { metaReducers: fromProductState.getMetaReducers }*/)
  ],
  providers: [
    {
      provide: FEATURE_CONFIG_TOKEN,
      useFactory: getConfig,
    },
  ]
})
export class MenuModule { }
