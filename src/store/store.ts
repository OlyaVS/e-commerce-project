import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from '../middleware/logger';
// import { logger } from 'redux-logger/src'; used self made middleware instead
// import thunk from 'redux-thunk'; used saga instead
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersisConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

// "user" comes from auth state listener
const persistConfig: ExtendedPersisConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// type predicate function - whatever passes the filter must be type middleware
const middleWares = [
  process.env.NODE_ENV !== 'production' && loggerMiddleware,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

// no window object during build step on the server
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
