import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <BrowserRouter basename="yojji-test-app">
                <App />
            </BrowserRouter>
        </StrictMode>
    </Provider>
);
