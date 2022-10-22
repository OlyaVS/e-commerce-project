import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root.reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from '../middleware/logger';
// import { logger } from 'redux-logger/src'; used self made middleware instead
import thunk from 'redux-thunk';

// "user" comes from auth state listener
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && loggerMiddleware, thunk].filter(
  Boolean
);

// no window object during build step on the server
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
