import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd'
import esES from 'antd/es/locale/es_ES';
import { Provider } from 'react-redux'
import store from './redux/store'
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ConfigProvider locale={esES}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
