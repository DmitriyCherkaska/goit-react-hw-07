import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <PersistGate loading={null} persistor={persistor}>
      </PersistGate> */}
    </Provider>
  </React.StrictMode>,
);
