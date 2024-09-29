import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './components/App/App.jsx';
import GlobalStyles  from './GlobalStyled-styled.js';
import { store, persistor } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
         <App />
         <GlobalStyles />
        </BrowserRouter>
    </PersistGate>
    </Provider>    
  </React.StrictMode>,
)