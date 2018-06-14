import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import productsReducer from '../reducers/products';
import shoppingCartReducer from '../reducers/shoppingCart';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      products: productsReducer,
      shoppingCart: shoppingCartReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
