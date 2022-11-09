import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from "react-redux";
import { combineReducers } from 'redux';
import { configureStore} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { EntryReducer } from './reducers/entries.reducers';
import { ModalReducer } from './reducers/modals.reducers';

const rootReducer = combineReducers({ EntryReducer, ModalReducer })
export default rootReducer;

const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


