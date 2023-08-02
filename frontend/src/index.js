import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import config from '  ';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/plugins/bootstrap/css/bootstrap.min.css"
//CSS & Bootstrap
import "./assets/css/style.css";

import "./assets/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/plugins/select2/css/select2.min.css"


//Font Awesome
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";


import App from "./App";
import { Provider } from 'react-redux';
import store from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const persistor = persistStore(store);

// import { App } from "antd";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router >
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
    <App/>
    </Provider>
  </Router>
);

// ReactDOM.render(
//   <Approuter/>,
// document.getElementById('root')
// );