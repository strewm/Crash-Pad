import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';

const store = configureStore();

// When in development...
if (process.env.NODE_ENV !== "production") {
  restoreCSRF(); // Gets 'XSRF-TOKEN' cookie (/store/csrf.js)

  window.csrfFetch = csrfFetch; // Attaches function onto window (/store/csrf.js)
  window.store = store;
}

function Root() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
