import {
  Dispatch as ReduxDispatch,
  Reducer as ReduxReducer,
} from 'redux';

import { RootReducer } from './root-reducer';

import { RootAction } from './root-action';

export type Dispatch = ReduxDispatch<RootAction>;
export type Reducer = ReduxReducer<RootReducer>;

export type Api = {};

