import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './components/App/App.jsx';
import GlobalStyles  from './GlobalStyled-styled.js';
import { store, persistor } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
    <App />
    <GlobalStyles />
    </Provider>
    </PersistGate>  
    </BrowserRouter>
  </React.StrictMode>,
)