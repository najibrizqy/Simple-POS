import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import Promise from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './reducers';

const logger = createLogger ();

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'users',
    'transactions',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore (
  persistedReducer,
  applyMiddleware (logger, Promise)
);

let persistor = persistStore(store);

export {
  store,
  persistor,
};