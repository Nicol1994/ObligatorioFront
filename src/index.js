import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './app/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter.StrictMode>
       <Provider store={store}>
            <App />
        </Provider> 
    </BrowserRouter.StrictMode>
    

);

reportWebVitals();
