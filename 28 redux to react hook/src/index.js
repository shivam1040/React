import React from 'react';
import ReactDOM from 'react-dom';
//commenting this to convert redux to react hooks
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import ProductsProvider from './context/product-context'
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import productReducer from './store/reducers/products';
import configureStore from './hooks-store/product-store'

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);
configureStore()

ReactDOM.render(
  // <Provider store={store}>
    // <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // {/* </Provider> */}
  // </ProductsProvider>,
  document.getElementById('root')
);
