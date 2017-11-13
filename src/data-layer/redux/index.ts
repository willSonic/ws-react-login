import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import { RootState, RootReducer } from './root-reducer';
import { RootAction } from './root-action';
import { RootEpic } from './root-epic';


export * from './root-action';
export * from './root-reducer';
export * from './root-epic';
export * from './types';




const epicMiddleware = createEpicMiddleware(RootEpic);
const loggerMiddleware = (createLogger as any)();
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(RootReducer);