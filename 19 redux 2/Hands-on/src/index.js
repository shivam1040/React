import React from 'react';
import ReactDOM from 'react-dom/client';
//passing the redux store to top level componenet, basically what we do with React context
import {Provider} from "react-redux"

import './index.css';
import App from './App';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // passing the created store here
<Provider store={store}>
<App />
</Provider>
);
