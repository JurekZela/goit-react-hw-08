import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './components/App/App.jsx';
import GlobalStyles  from './GlobalStyled-styled.js';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <GlobalStyles />
    </Provider>    
  </React.StrictMode>,
)