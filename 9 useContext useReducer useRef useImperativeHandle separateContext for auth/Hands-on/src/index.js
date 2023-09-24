import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import {AuthContextProvider} from './store/auth-context'

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
//warapping app in authcontextprovider to pass auth related stuff to every component
root.render(<AuthContextProvider><App /></AuthContextProvider>);
