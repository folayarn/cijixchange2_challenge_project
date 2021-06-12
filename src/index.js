import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import gigReducer from './store/reducers/gigReducer';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  gig: gigReducer
})

const composeEnhancers = (process.env.NODE_ENV === 'development' 
? 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
:
 null) || compose;

const store = createStore(rootReducer,
   composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
   </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
